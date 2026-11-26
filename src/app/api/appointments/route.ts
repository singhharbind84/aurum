import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { clinic, treatments } from "@/data/clinic";

const appointmentSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d().\-\s]+$/),
  treatment: z.string().max(100).optional().default(""),
  date: z.string().optional().default("").refine((value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value), "Enter a valid date"),
  time: z.enum(["", "Morning", "Afternoon", "Flexible"]).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  website: z.string().max(200).optional().default(""),
});

const submissions = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_SUBMISSIONS) {
    submissions.set(ip, recent);
    return true;
  }
  submissions.set(ip, [...recent, now]);
  return false;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Please submit the form using the provided fields." }, { status: 415 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many enquiries. Please try again later." }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "The form data could not be read." }, { status: 400 });
  }

  const parsed = appointmentSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ message: "Your enquiry has been received." });
  }
  if (
    parsed.data.treatment &&
    parsed.data.treatment !== "Not sure yet" &&
    !treatments.some((treatment) => treatment.name === parsed.data.treatment)
  ) {
    return NextResponse.json({ error: "Please select a treatment from the list." }, { status: 400 });
  }
  if (parsed.data.date && parsed.data.date < new Date().toISOString().slice(0, 10)) {
    return NextResponse.json({ error: "Please choose a future date." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.APPOINTMENTS_TO_EMAIL;
  const from = process.env.APPOINTMENTS_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "Appointment enquiries are not configured yet. Please contact the clinic directly." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject: `New appointment enquiry — ${parsed.data.name}`,
    text: [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      `Phone: ${parsed.data.phone}`,
      `Treatment: ${parsed.data.treatment || "Not specified"}`,
      `Preferred date: ${parsed.data.date || "Not specified"}`,
      `Preferred time: ${parsed.data.time || "Not specified"}`,
      `Message: ${parsed.data.message || "Not provided"}`,
      "",
      "This is an enquiry only, not a confirmed appointment.",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend appointment email failed:", error);
    return NextResponse.json({ error: "We couldn't send your enquiry right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: `Your enquiry has been sent to ${clinic.name}.` }, { status: 201 });
}
