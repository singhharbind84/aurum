"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/clinic";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  const move = (offset: number) => setActive((active + offset + testimonials.length) % testimonials.length);
  return (
    <div className="rounded-[30px] border border-slate-100 bg-white p-7 shadow-[0_20px_70px_rgba(16,42,67,.05)] sm:p-10">
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700"><Quote size={21} /></span>
        <span className="rounded-full bg-amber-50 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-amber-800">Sample demonstration content</span>
      </div>
      <p className="display-heading mt-9 min-h-[128px] text-2xl leading-relaxed sm:text-3xl">“{item.quote}”</p>
      <div className="mt-7 flex flex-wrap items-end justify-between gap-5 border-t border-slate-100 pt-6">
        <div><p className="text-sm font-semibold">{item.author}</p><p className="mt-1 text-xs text-slate-500">{item.context}</p></div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Previous demonstration testimonial" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 transition hover:bg-ink hover:text-white"><ArrowLeft size={16} /></button>
          <span className="px-2 text-xs tabular-nums text-slate-500">{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next demonstration testimonial" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 transition hover:bg-ink hover:text-white"><ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
