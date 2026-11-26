import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, HeartHandshake, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = { title: "About Us", description: "Learn about the patient-first philosophy behind Dentora." };

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="section-wrap grid gap-12 pb-24 pt-36 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow">About Dentora</div>
          <h1 className="display-heading mt-5 text-5xl leading-tight sm:text-6xl">A little more care in every detail.</h1>
          <p className="mt-7 text-lg leading-8 text-slate-600">Dentora is a premium dental studio concept built around one simple thought: great care should feel personal, clear and comfortable.</p>
          <p className="mt-4 text-base leading-7 text-slate-500">From the first hello to the details of a treatment plan, our approach puts people first. Modern technology is here to support thoughtful care — and conversation is always part of it.</p>
          <Link href="/book-appointment" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div className="relative h-[520px] overflow-hidden rounded-[30px]"><Image fill sizes="(max-width: 1024px) 100vw, 50vw" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85" alt="Illustrative image of a modern dental studio" className="object-cover" /></div>
      </section>
      <section className="bg-white py-20">
        <div className="section-wrap grid gap-6 md:grid-cols-3">
          {[{ icon: HeartHandshake, title: "Patient-first care", text: "Your goals, questions and comfort belong at the center of the conversation." }, { icon: Sparkles, title: "Thoughtful technology", text: "Modern tools make care more visual and help us explain your options." }, { icon: Check, title: "Clear communication", text: "We take time to discuss possible next steps without pressure or promises." }].map(({ icon: Icon, title, text }) => <article className="rounded-3xl border border-slate-100 p-8" key={title}><span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700"><Icon size={20} /></span><h2 className="mt-6 text-xl font-medium">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-500">{text}</p></article>)}
        </div>
      </section>
      <section className="section-wrap py-20"><p className="rounded-2xl bg-sky-50 p-6 text-sm leading-7 text-slate-600">This website is a demonstration project. Replace all placeholder clinic information, images and team details with verified materials before public launch.</p></section>
    </SiteShell>
  );
}
