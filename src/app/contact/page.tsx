import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = { title: "Contact", description: "Contact the Dentora demonstration dental studio." };

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-[radial-gradient(ellipse_at_75%_5%,#dcf7fa,transparent_45%)] pt-36">
        <div className="section-wrap pb-14">
          <div className="eyebrow">We’re here to help</div>
          <h1 className="display-heading mt-5 max-w-3xl text-5xl sm:text-6xl">Let’s start a conversation.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Questions about care, our studio or how to find us? Send a note and our team will be in touch.</p>
        </div>
      </section>
      <section className="section-wrap grid gap-12 pb-24 lg:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-ink p-7 text-white">
            <h2 className="text-lg font-medium">Visit the studio</h2>
            <p className="mt-5 flex gap-3 text-sm leading-6 text-slate-200"><MapPin className="mt-1 shrink-0 text-sky-300" size={17} />{clinic.address}</p>
            <a href={`tel:${clinic.phone}`} className="mt-5 flex items-center gap-3 text-sm text-slate-200"><Phone className="text-sky-300" size={16} />{clinic.phone}</a>
            <a href={`mailto:${clinic.email}`} className="mt-4 flex items-center gap-3 text-sm text-slate-200"><Mail className="text-sky-300" size={16} />{clinic.email}</a>
            <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-white underline decoration-sky-300 underline-offset-4">WhatsApp us <ArrowUpRight size={14} /></a>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-7">
            <h2 className="flex items-center gap-2 font-medium"><Clock3 size={17} className="text-sky-700" /> Opening hours</h2>
            <div className="mt-5 space-y-3">{clinic.hours.map(([day, time]) => <p className="flex justify-between gap-3 text-sm text-slate-600" key={day}><span>{day}</span><span className="text-right">{time}</span></p>)}</div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-100">
            <iframe title="Map placeholder for the editable clinic address" src="https://maps.google.com/maps?q=Your%20City&t=&z=12&ie=UTF8&iwloc=&output=embed" className="h-[250px] w-full border-0 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <p className="bg-white px-4 py-3 text-xs text-slate-500">Map placeholder — update the clinic address and embedded map before launch.</p>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-2xl font-medium">Send us a message</h2>
          <ContactForm />
          <p className="mt-4 text-xs leading-5 text-slate-500">This demonstration contact form requires Resend configuration. You may also email us directly at <Link className="underline" href={`mailto:${clinic.email}`}>{clinic.email}</Link>.</p>
        </div>
      </section>
    </SiteShell>
  );
}
