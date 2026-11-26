"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { treatments } from "@/data/clinic";

const initialForm = { name: "", email: "", phone: "", treatment: "", date: "", time: "", message: "", website: "" };

export function AppointmentForm() {
  const [values, setValues] = useState(initialForm);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your enquiry. Please try again.");
      setStatus({ type: "success", message: "Thanks — your enquiry has been received. Our team will be in touch to discuss availability. This is not an appointment confirmation." });
      setValues(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

  return (
    <form className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_20px_70px_rgba(16,42,67,.07)] sm:p-9" onSubmit={submit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-semibold text-slate-700">Your name *
          <input required name="name" autoComplete="name" maxLength={100} value={values.name} onChange={update} className={fieldClass} placeholder="Full name" />
        </label>
        <label className="text-xs font-semibold text-slate-700">Email address *
          <input required type="email" name="email" autoComplete="email" maxLength={254} value={values.email} onChange={update} className={fieldClass} placeholder="you@example.com" />
        </label>
        <label className="text-xs font-semibold text-slate-700">Phone number *
          <input required type="tel" name="phone" autoComplete="tel" maxLength={30} value={values.phone} onChange={update} className={fieldClass} placeholder="+1 (555) 000-0000" />
        </label>
        <label className="text-xs font-semibold text-slate-700">Treatment of interest
          <select name="treatment" value={values.treatment} onChange={update} className={fieldClass}>
            <option value="">Select a treatment</option>
            {treatments.map((treatment) => <option key={treatment.slug} value={treatment.name}>{treatment.name}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-slate-700">Preferred date
          <input type="date" name="date" min={new Date().toISOString().slice(0, 10)} value={values.date} onChange={update} className={fieldClass} />
        </label>
        <label className="text-xs font-semibold text-slate-700">Preferred time
          <select name="time" value={values.time} onChange={update} className={fieldClass}>
            <option value="">Select a time</option>
            <option>Morning</option><option>Afternoon</option><option>Flexible</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-xs font-semibold text-slate-700">Anything else you would like us to know?
        <textarea name="message" rows={4} maxLength={2000} value={values.message} onChange={update} className={`${fieldClass} resize-y`} placeholder="Share a little about how we can help (please don't include sensitive medical information)." />
      </label>
      <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Leave this field empty
        <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={update} />
      </label>
      <p className="mt-4 text-xs leading-5 text-slate-500">Submitting this form sends an enquiry only. We’ll contact you to discuss availability; your appointment is not confirmed until agreed with our team.</p>
      {status && (
        <div role="status" className={`mt-5 flex gap-3 rounded-xl p-4 text-sm leading-6 ${status.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}>
          {status.type === "success" && <CheckCircle2 className="mt-0.5 shrink-0" size={18} />}
          {status.message}
        </div>
      )}
      <button disabled={submitting} className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-wait disabled:opacity-60">
        {submitting ? "Sending enquiry…" : "Send appointment enquiry"} <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
