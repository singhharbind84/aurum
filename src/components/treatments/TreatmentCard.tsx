"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Gem, Heart, ScanLine, Shield, Smile, Sparkles, Star, Sun } from "lucide-react";
import type { Treatment } from "@/data/clinic";

const icons = { sparkles: Sparkles, smile: Smile, sun: Sun, scan: ScanLine, heart: Heart, gem: Gem, shield: Shield, star: Star };

type Props = { treatment: Treatment };

export function TreatmentCard({ treatment }: Props) {
  const Icon = icons[treatment.icon];
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -7, rotateX: 1.5, rotateY: -1 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_8px_35px_rgba(16,42,67,.045)]"
    >
      <Link href={`/treatments/${treatment.slug}`} className="block">
        <div className="relative h-[225px] overflow-hidden">
          <Image fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" src={treatment.image} alt="" />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
          <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/80 text-sky-700 backdrop-blur"><Icon size={18} /></span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-medium tracking-tight">{treatment.name}</h3>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 transition group-hover:border-ink group-hover:bg-ink group-hover:text-white"><ArrowUpRight size={15} /></span>
          </div>
          <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">{treatment.short}</p>
          <span className="mt-5 inline-block text-xs font-semibold tracking-wide text-ink">Learn more <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </motion.article>
  );
}
