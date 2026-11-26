"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  ["How can I book an appointment?", "Send an appointment enquiry through our booking form or contact the clinic directly. Our team will follow up to discuss availability. An enquiry is not a confirmed appointment."],
  ["Do you offer dental implants?", "Dental implant consultations are among the services featured in this demonstration. A dentist can discuss suitability and options after an individual assessment."],
  ["What treatments are available?", "The treatment areas shown include preventive, restorative, cosmetic, orthodontic and pediatric dentistry. Please contact the clinic to confirm what is offered."],
  ["How often should I visit a dentist?", "Visit timing depends on your individual oral health needs. Your dental professional can recommend a schedule that is right for you."],
  ["What happens during a consultation?", "A consultation is an opportunity to discuss your goals and concerns, review your oral health and talk through appropriate options and next steps."],
  ["Do you provide cosmetic dentistry?", "Cosmetic dentistry options are included in this concept website. Your clinician can explain which treatments may be suitable for your needs."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200">
      {items.map(([question, answer], index) => (
        <div key={question}>
          <button
            className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span className="text-base font-medium text-ink sm:text-lg">{question}</span>
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${open === index ? "rotate-180 bg-ink text-white" : "bg-slate-100 text-ink"}`}><ChevronDown size={16} /></span>
          </button>
          {open === index && <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-slate-600">{answer}</p>}
        </div>
      ))}
    </div>
  );
}
