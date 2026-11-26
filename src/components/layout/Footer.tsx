import Link from "next/link";
import { ArrowUpRight, Instagram, MapPin, Phone } from "lucide-react";
import { clinic, treatments } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="bg-[#0d263b] text-white">
      <div className="section-wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink">✳</span>
            <span>
              <span className="block text-lg font-bold tracking-[0.18em]">DENTORA</span>
              <span className="block text-[9px] tracking-[0.2em] text-slate-300">PREMIUM DENTAL STUDIO</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-300">
            {clinic.tagline} A demonstration clinic concept, ready to make your own.
          </p>
          <div className="mt-6 flex gap-3">
            {clinic.socials.map((social) => (
              <a className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-xs transition hover:bg-white hover:text-ink" href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} key={social.name}>
                <Instagram size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Explore</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link href="/about">About the studio</Link>
            <Link href="/doctors">Our doctors</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/book-appointment">Book a visit</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Treatments</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {treatments.slice(0, 5).map((treatment) => (
              <Link href={`/treatments/${treatment.slug}`} key={treatment.slug}>{treatment.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Find us</h2>
          <p className="mt-5 flex gap-3 text-sm leading-6 text-slate-300"><MapPin className="mt-1 shrink-0" size={16} />{clinic.address}</p>
          <a className="mt-4 flex items-center gap-3 text-sm text-slate-300" href={`tel:${clinic.phone}`}><Phone size={15} />{clinic.phone}</a>
          <a className="mt-6 inline-flex items-center gap-2 text-sm text-white underline decoration-sky-400 underline-offset-4" href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer">
            Say hello on WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-wrap flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DENTORA. Demonstration website content.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
