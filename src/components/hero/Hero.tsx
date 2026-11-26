"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ToothScene = dynamic(() => import("./ToothScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-sky-100/70" />,
});

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduceMotion || !heroRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(".hero-orbit", {
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, heroRef);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={heroRef} className="hero-shell relative min-h-[760px] overflow-hidden bg-[radial-gradient(ellipse_at_68%_47%,#dff7fb_0%,#edf9fb_26%,#f8fafc_68%)] pt-[76px]">
      <div className="hero-orbit pointer-events-none absolute -right-32 top-28 h-[560px] w-[560px] rounded-full border border-sky-200/50" />
      <div className="pointer-events-none absolute right-[-5%] top-[15%] h-[460px] w-[460px] rounded-full border border-sky-100/80" />
      <div className="section-wrap relative grid min-h-[684px] items-center gap-8 pb-14 pt-16 lg:grid-cols-[0.93fr_1.07fr] lg:pb-20 lg:pt-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[600px]"
        >
          <div className="eyebrow mb-7">A new standard of dental care</div>
          <h1 className="display-heading text-[clamp(3.35rem,6.2vw,5.75rem)] leading-[0.98]">
            Your smile deserves <span className="text-sky-600">extraordinary</span> care.
          </h1>
          <p className="mt-7 max-w-[460px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Discover advanced dental care designed around your comfort, confidence and perfect smile.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/book-appointment" className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-ink/15 transition hover:-translate-y-0.5 hover:bg-sky-800">
              Book an appointment <ArrowUpRight size={17} />
            </Link>
            <a href="#treatments" className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition hover:border-sky-400">
              Explore treatments
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs font-medium text-slate-500">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-100 text-sky-700"><Sparkles size={15} /></span>
            A calmer, more considered dental experience
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12 }}
          className="relative mx-auto h-[430px] w-full max-w-[620px] sm:h-[540px] lg:h-[610px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#b8f1fb_0%,#dff9f8_35%,rgba(248,250,252,0)_72%)]" />
          <div className="absolute inset-0 z-[1]">
            <ToothScene />
          </div>
          <div className="absolute left-[8%] top-[20%] z-[2] hidden rounded-2xl border border-white/80 bg-white/65 p-4 shadow-xl shadow-sky-900/5 backdrop-blur-md sm:block">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-400">Designed around you</span>
            <span className="mt-1 block text-sm font-semibold text-ink">Care that feels different.</span>
          </div>
          <div className="absolute bottom-[13%] right-[4%] z-[2] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-xl shadow-sky-900/5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-100" />
            <span className="text-xs font-medium text-slate-600">Your comfort comes first</span>
          </div>
          <div className="absolute right-[13%] top-[12%] h-10 w-10 rounded-full border border-white bg-white/60 shadow-lg backdrop-blur" />
          <div className="absolute bottom-[20%] left-[12%] h-5 w-5 rounded-full bg-sky-200/70 blur-[1px]" />
        </motion.div>
        <a href="#welcome" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-400 lg:flex">
          Scroll to discover <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}
