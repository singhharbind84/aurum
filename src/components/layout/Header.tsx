"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Treatments", "/treatments"],
  ["Doctors", "/doctors"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-paper/85 backdrop-blur-xl">
      <div className="section-wrap flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Dentora home"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white">
            <span className="text-xl leading-none">✳</span>
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-bold tracking-[0.18em]">DENTORA</span>
            <span className="block text-[8px] font-semibold tracking-[0.21em] text-slate-500">
              PREMIUM DENTAL STUDIO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          <Link className="text-sm text-slate-600 transition hover:text-ink" href="/">Home</Link>
          {links.map(([label, href]) => (
            <Link className="text-sm text-slate-600 transition hover:text-ink" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book-appointment"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-sky-800 sm:flex"
        >
          Book appointment <ArrowUpRight size={15} />
        </Link>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-paper px-6 pb-6 pt-3 lg:hidden" aria-label="Mobile navigation">
          <Link className="block border-b border-slate-200 py-3 text-sm" href="/" onClick={() => setOpen(false)}>Home</Link>
          {links.map(([label, href]) => (
            <Link className="block border-b border-slate-200 py-3 text-sm" href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white" href="/book-appointment" onClick={() => setOpen(false)}>
            Book appointment <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
