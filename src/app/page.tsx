import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Clock3, HeartHandshake, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Faq } from "@/components/sections/Faq";
import { TechnologyExperience } from "@/components/sections/TechnologyExperience";
import { Testimonials } from "@/components/sections/Testimonials";
import { clinic, dentists, treatments } from "@/data/clinic";
import { SiteShell } from "@/components/layout/SiteShell";

const trust = [
  { icon: ScanLine, title: "Modern technology", note: "Thoughtfully selected tools" },
  { icon: HeartHandshake, title: "Personalized care", note: "A plan shaped around you" },
  { icon: Sparkles, title: "Patient comfort", note: "A calmer kind of visit" },
  { icon: ShieldCheck, title: "Experienced team", note: "People who put you first" },
];

export default function HomePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: clinic.name,
            description: clinic.tagline,
            telephone: clinic.phone,
            email: clinic.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: clinic.address,
              addressLocality: "Your City",
              addressRegion: "ST",
              postalCode: "00000",
              addressCountry: "US",
            },
            openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
            url: "https://dentora.example",
          }),
        }}
      />
      <Hero />

      <section id="welcome" className="section-wrap grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-32">
        <Reveal>
          <div className="eyebrow">Welcome to Dentora</div>
          <h2 className="display-heading mt-5 text-4xl leading-[1.08] sm:text-5xl">Dental care, reimagined around <span className="text-sky-600">you.</span></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">A visit to the dentist can feel different. We bring considered care, modern technology and genuine attention together to create a more comfortable experience — from your first conversation to every visit after.</p>
          <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-sky-400 underline-offset-8" href="/about">Get to know our approach <ArrowUpRight size={16} /></Link>
        </Reveal>
      </section>

      <section className="border-y border-slate-200/80 bg-white/70 py-10">
        <div className="section-wrap grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ icon: Icon, title, note }, index) => (
            <Reveal delay={index * 0.06} key={title}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700"><Icon size={20} /></span>
                <span><span className="block text-sm font-semibold">{title}</span><span className="mt-1 block text-xs text-slate-500">{note}</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="treatments" className="section-wrap py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal><div className="eyebrow">Care for every smile</div><h2 className="display-heading mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">Considered care for every stage.</h2></Reveal>
          <Reveal><Link href="/treatments" className="inline-flex items-center gap-2 text-sm font-semibold">Explore all treatments <ArrowUpRight size={16} /></Link></Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} />)}
        </div>
      </section>

      <section className="overflow-hidden bg-[#102a43] py-20 text-white md:py-28">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="eyebrow text-sky-300">A closer look</div>
            <h2 className="display-heading mt-5 text-4xl leading-tight sm:text-5xl">Every smile is its own story.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300">Explore our interactive image comparison. These clearly illustrative images are for website demonstration only and do not represent a patient or treatment result.</p>
            <div className="mt-7 flex items-center gap-3 text-xs text-slate-300"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/10"><Check size={15} /></span>Designed to inform, never to promise results</div>
          </Reveal>
          <Reveal delay={0.1}><BeforeAfter /></Reveal>
        </div>
      </section>

      <section className="section-wrap grid gap-12 py-24 md:grid-cols-2 md:items-center md:py-32">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[30px]">
            <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85" alt="Bright contemporary dental studio interior" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/60 bg-white/75 px-5 py-4 backdrop-blur-md">
              <span className="block text-xs uppercase tracking-widest text-slate-500">The Dentora difference</span>
              <span className="mt-1 block text-sm font-semibold">A space to feel at ease.</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="eyebrow">A thoughtful approach</div>
          <h2 className="display-heading mt-5 text-4xl leading-tight sm:text-5xl">Good care starts with feeling heard.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">We believe a great dental experience begins before you sit in the chair. From a welcoming environment to clear explanations, every detail is considered with your comfort in mind.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Patient-first conversations", "Modern clinical equipment", "Comfortable, calm spaces", "Care plans explained clearly"].map((item) => <div className="flex items-center gap-3 text-sm text-slate-700" key={item}><span className="grid h-7 w-7 place-items-center rounded-full bg-mint text-emerald-800"><Check size={14} /></span>{item}</div>)}
          </div>
          <Link href="/about" className="mt-9 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold transition hover:bg-ink hover:text-white">More about us <ArrowUpRight size={15} /></Link>
        </Reveal>
      </section>

      <section className="bg-[#eef7f7] py-24 md:py-28">
        <div className="section-wrap">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <Reveal><div className="eyebrow">The people behind your care</div><h2 className="display-heading mt-5 text-4xl sm:text-5xl">Meet your dental team.</h2></Reveal>
            <Reveal><Link href="/doctors" className="inline-flex items-center gap-2 text-sm font-semibold">Meet all doctors <ArrowUpRight size={16} /></Link></Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dentists.map((dentist, index) => (
              <Reveal delay={index * 0.08} key={`${dentist.name}-${index}`}>
                <article className="overflow-hidden rounded-[26px] bg-white">
                  <div className="relative h-[330px]"><Image fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" src={dentist.image} alt="Placeholder portrait for an editable dentist profile" /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium">{dentist.name}</h3>
                    <p className="mt-2 text-sm text-sky-700">{dentist.specialty}</p>
                    <p className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">{dentist.qualification} · {dentist.experience}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">Profile names, qualifications and experience are editable placeholders, not real credentials.</p>
        </div>
      </section>

      <section className="section-wrap grid gap-14 py-24 md:grid-cols-2 md:items-center md:py-32">
        <Reveal>
          <div className="eyebrow">The future of feeling good</div>
          <h2 className="display-heading mt-5 text-4xl leading-tight sm:text-5xl">Technology with a human touch.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">Modern tools can make dental care more visual and precise. We make time to explain what each technology does, so you can feel confident and informed.</p>
          <div className="mt-8 grid gap-5">
            {[["Digital dental scanning", "A comfortable, detailed view to support your care conversation."], ["Digital smile design", "Explore visual planning tools as part of a personalized discussion."], ["Modern treatment equipment", "Thoughtfully selected technology in a calm clinical environment."]].map(([title, detail], i) => <div className="flex gap-4" key={title}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">{i === 0 ? <ScanLine size={18} /> : i === 1 ? <Sparkles size={18} /> : <Clock3 size={18} />}</span><span><span className="block text-sm font-semibold">{title}</span><span className="mt-1 block text-sm leading-6 text-slate-500">{detail}</span></span></div>)}
          </div>
        </Reveal>
        <Reveal delay={0.1}><TechnologyExperience /></Reveal>
      </section>

      <section className="bg-[#eef7f7] py-24 md:py-28">
        <div className="section-wrap grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <Reveal>
            <div className="eyebrow">Words from our community</div>
            <h2 className="display-heading mt-5 text-4xl leading-tight sm:text-5xl">Every experience starts with listening.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">This carousel is filled with sample demonstration content. Replace it with genuine, permissioned patient feedback before publishing.</p>
          </Reveal>
          <Reveal delay={0.1}><Testimonials /></Reveal>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="section-wrap">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <Reveal><div className="eyebrow">Inside the studio</div><h2 className="display-heading mt-5 text-4xl sm:text-5xl">A little look around.</h2></Reveal>
            <Reveal><Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold">Explore gallery <ArrowUpRight size={16} /></Link></Reveal>
          </div>
          <div className="mt-10"><GalleryGrid /></div>
          <p className="mt-4 text-xs text-slate-500">Illustrative clinic imagery for this demonstration website.</p>
        </div>
      </section>

      <section className="section-wrap grid gap-12 py-24 md:grid-cols-[.8fr_1.2fr] md:py-28">
        <Reveal>
          <div className="eyebrow">Good to know</div>
          <h2 className="display-heading mt-5 text-4xl leading-tight sm:text-5xl">Questions are always welcome.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">Here are a few helpful answers. Our team is happy to help with anything else.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline decoration-sky-400 underline-offset-8">Get in touch <ArrowUpRight size={15} /></Link>
        </Reveal>
        <Reveal delay={0.1}><Faq /></Reveal>
      </section>

      <section className="relative overflow-hidden bg-[#dff7f8] py-20 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-40 h-[430px] w-[430px] rounded-full border border-sky-300/50" />
        <div className="section-wrap relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><div className="eyebrow">Your next step</div><h2 className="display-heading mt-4 max-w-2xl text-4xl sm:text-5xl">Ready to make room for a brighter visit?</h2><p className="mt-4 text-sm text-slate-600">Start with a conversation. We’ll help you explore what feels right.</p></div>
          <Link href="/book-appointment" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Book an appointment <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </SiteShell>
  );
}
