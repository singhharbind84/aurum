import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(2).max(2000),
  website: z.string().max(200).optional().default(""),
});
const recentRequests = new Map<string, number[]>();

export async function POST(request: NextRequest) {
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return NextResponse.json({ error: "Please submit the form using the provided fields." }, { status: 415 });
  }
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "The form data could not be read." }, { status: 400 });
  }
  const parsed = schema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ message: "Your message has been received." });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (recentRequests.get(ip) ?? []).filter((timestamp) => now - timestamp < 15 * 60 * 1000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  recentRequests.set(ip, [...recent, now]);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.APPOINTMENTS_TO_EMAIL;
  const from = process.env.APPOINTMENTS_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "The contact form is not configured yet. Please contact the clinic directly." }, { status: 503 });
  }
  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject: `Website contact message — ${parsed.data.name}`,
    text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
  });
  if (error) {
    console.error("Resend contact email failed:", error);
    return NextResponse.json({ error: "We couldn't send your message right now. Please try again later." }, { status: 502 });
  }
  return NextResponse.json({ message: "Your message has been sent." }, { status: 201 });
}
