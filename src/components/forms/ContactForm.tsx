"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your message.");
      setStatus("Thanks — your message has been received. Our team will be in touch.");
      setValues({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const inputStyle = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100";
  return (
    <form className="rounded-[26px] border border-slate-100 bg-white p-6 shadow-[0_20px_70px_rgba(16,42,67,.06)] sm:p-8" onSubmit={submit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-semibold text-slate-700">Your name *
          <input required name="name" maxLength={100} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} className={inputStyle} />
        </label>
        <label className="text-xs font-semibold text-slate-700">Email address *
          <input required type="email" name="email" maxLength={254} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} className={inputStyle} />
        </label>
      </div>
      <label className="mt-5 block text-xs font-semibold text-slate-700">Your message *
        <textarea required name="message" rows={5} maxLength={2000} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} className={`${inputStyle} resize-y`} />
      </label>
      <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Leave this field empty
        <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={(e) => setValues({ ...values, website: e.target.value })} />
      </label>
      {status && <p className="mt-4 rounded-lg bg-sky-50 p-4 text-sm leading-6 text-sky-900" role="status">{status}</p>}
      <button disabled={busy} className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:opacity-60">{busy ? "Sending…" : "Send message"} <ArrowUpRight size={16} /></button>
    </form>
  );
}
