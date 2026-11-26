import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { dentists } from "@/data/clinic";

export const metadata: Metadata = { title: "Our Doctors", description: "Meet the editable placeholder dentist profiles for the Dentora concept." };

export default function DoctorsPage() {
  return (
    <SiteShell>
      <section className="bg-[radial-gradient(ellipse_at_75%_5%,#dcf7fa,transparent_45%)] pt-36">
        <div className="section-wrap pb-14">
          <div className="eyebrow">Meet your care team</div>
          <h1 className="display-heading mt-5 max-w-3xl text-5xl sm:text-6xl">People who make care personal.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Our team profiles are editable placeholders for your real clinic’s verified biographies and credentials.</p>
        </div>
      </section>
      <section className="section-wrap pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {dentists.map((dentist, index) => <article className="overflow-hidden rounded-[26px] border border-slate-100 bg-white" key={`${dentist.name}-${index}`}><div className="relative h-[400px]"><Image fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" src={dentist.image} alt="Placeholder portrait for an editable dentist profile" /></div><div className="p-7"><p className="text-xs uppercase tracking-[0.16em] text-sky-700">{dentist.specialty}</p><h2 className="mt-3 text-2xl font-medium">{dentist.name}</h2><p className="mt-4 text-sm leading-6 text-slate-500">{dentist.qualification}</p><p className="mt-1 text-sm text-slate-500">{dentist.experience}</p></div></article>)}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">Names, qualifications, specialties and experience are placeholders and must be replaced with accurate details.</p>
        <div className="mt-12 text-center"><Link href="/book-appointment" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white">Meet with our team <ArrowUpRight size={16} /></Link></div>
      </section>
    </SiteShell>
  );
}
