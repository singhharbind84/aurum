import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { treatments } from "@/data/clinic";

export const metadata: Metadata = { title: "Treatments", description: "Explore the dental care featured at the Dentora demonstration clinic." };

export default function TreatmentsPage() {
  return (
    <SiteShell>
      <section className="bg-[radial-gradient(ellipse_at_75%_5%,#dcf7fa,transparent_45%)] pt-36">
        <div className="section-wrap pb-16">
          <div className="eyebrow">Our treatments</div>
          <h1 className="display-heading mt-5 max-w-3xl text-5xl leading-tight sm:text-6xl">Care that meets you where you are.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Explore the services featured in this clinic concept. Every treatment begins with a conversation and an individual clinical assessment.</p>
        </div>
      </section>
      <section className="section-wrap pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} />)}
        </div>
        <p className="mt-8 text-sm text-slate-500">Service availability and suitability should be confirmed directly with your dental professional.</p>
        <Link href="/book-appointment" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white">Discuss your options <ArrowUpRight size={16} /></Link>
      </section>
    </SiteShell>
  );
}
