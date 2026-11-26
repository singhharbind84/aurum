import type { Metadata } from "next";
import { CalendarDays, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = { title: "Book an Appointment", description: "Send an appointment enquiry to Dentora." };

export default function BookAppointmentPage() {
  return (
    <SiteShell>
      <section className="bg-[radial-gradient(ellipse_at_75%_5%,#dcf7fa,transparent_45%)] pt-36">
        <div className="section-wrap pb-14">
          <div className="eyebrow">Your next step</div>
          <h1 className="display-heading mt-5 max-w-3xl text-5xl sm:text-6xl">Let’s find a time to talk.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Tell us a little about what you’re looking for. Our team will follow up to discuss availability and next steps.</p>
        </div>
      </section>
      <section className="section-wrap grid gap-10 pb-24 lg:grid-cols-[.65fr_1.35fr]">
        <aside className="space-y-5">
          <div className="rounded-3xl bg-ink p-7 text-white"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-sky-200"><CalendarDays size={20} /></span><h2 className="mt-5 text-lg font-medium">A simple first step</h2><p className="mt-3 text-sm leading-7 text-slate-300">Share a preferred time and treatment of interest. We’ll reach out to talk through availability.</p></div>
          <div className="rounded-3xl border border-slate-100 bg-white p-7"><ShieldCheck size={20} className="text-emerald-700" /><h2 className="mt-4 font-medium">Your enquiry is private</h2><p className="mt-2 text-sm leading-6 text-slate-500">Information is sent to the clinic email configured for this website. Avoid sharing sensitive medical information in this form.</p></div>
        </aside>
        <AppointmentForm />
      </section>
    </SiteShell>
  );
}
