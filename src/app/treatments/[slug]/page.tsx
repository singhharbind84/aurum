import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { treatments } from "@/data/clinic";

export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);
  return treatment ? { title: treatment.name, description: treatment.short } : {};
}

export default async function TreatmentDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);
  if (!treatment) notFound();

  return (
    <SiteShell>
      <section className="section-wrap grid gap-12 pb-24 pt-36 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <Link href="/treatments" className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-ink"><ArrowLeft size={15} /> All treatments</Link>
          <div className="eyebrow mt-10">Personalized dental care</div>
          <h1 className="display-heading mt-5 text-5xl leading-tight sm:text-6xl">{treatment.name}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{treatment.description}</p>
          <p className="mt-5 text-sm leading-7 text-slate-500">Treatment options and outcomes vary by individual. Your dental professional can assess your needs and explain appropriate choices.</p>
          <div className="mt-8 grid gap-3 text-sm text-slate-700">
            {["Start with a one-to-one conversation", "Understand options and next steps", "A plan considered around your needs"].map((item) => <div className="flex items-center gap-3" key={item}><span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-emerald-800"><Check size={13} /></span>{item}</div>)}
          </div>
          <Link href="/book-appointment" className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white">Enquire about this treatment <ArrowUpRight size={16} /></Link>
        </div>
        <div className="relative h-[480px] overflow-hidden rounded-[30px] sm:h-[580px]">
          <Image fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" src={treatment.image} alt={`Illustrative image for ${treatment.name}`} />
          <span className="absolute bottom-5 left-5 rounded-full bg-white/85 px-4 py-2 text-xs text-ink backdrop-blur">Illustrative clinic imagery</span>
        </div>
      </section>
    </SiteShell>
  );
}
