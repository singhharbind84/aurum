"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ScanLine, Sparkles, Crosshair } from "lucide-react";

const TechScene = dynamic(() => import("./TechScene"), {
  ssr: false,
  loading: () => <div className="h-full min-h-[310px] animate-pulse rounded-3xl bg-sky-100/70" />,
});

const modes = [
  {
    id: "scan",
    title: "Digital scanning",
    description: "An interactive look at a digital scan workflow.",
    icon: ScanLine,
  },
  {
    id: "smile",
    title: "Smile design",
    description: "A simplified 3D smile-planning visualization.",
    icon: Sparkles,
  },
  {
    id: "implant",
    title: "Implant technology",
    description: "A conceptual implant model for treatment conversations.",
    icon: Crosshair,
  },
] as const;

export type TechnologyMode = (typeof modes)[number]["id"];

export function TechnologyExperience() {
  const [mode, setMode] = useState<TechnologyMode>("scan");
  const active = modes.find((item) => item.id === mode) ?? modes[0];
  return (
    <div className="overflow-hidden rounded-[30px] border border-sky-100 bg-[radial-gradient(ellipse_at_55%_35%,#e0f8fc,#f1fbfb_65%,#e6f4f4)] p-5 sm:p-7">
      <div className="relative h-[310px] overflow-hidden rounded-3xl sm:h-[360px]">
        <TechScene mode={mode} />
        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/80 bg-white/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-sky-800 backdrop-blur">
          Interactive 3D concept
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl border border-white/80 bg-white/75 px-4 py-3 backdrop-blur">
          <span className="block text-[9px] uppercase tracking-[0.16em] text-slate-400">Exploring</span>
          <span className="mt-1 block text-sm font-semibold text-ink">{active.title}</span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {modes.map(({ id, title, icon: Icon }) => (
          <button
            type="button"
            key={id}
            onClick={() => setMode(id)}
            aria-pressed={mode === id}
            className={`rounded-2xl p-3 text-left transition sm:p-4 ${mode === id ? "bg-ink text-white shadow-lg shadow-ink/15" : "bg-white/75 text-ink hover:bg-white"}`}
          >
            <Icon size={16} className={mode === id ? "text-sky-300" : "text-sky-700"} />
            <span className="mt-2 block text-[10px] font-semibold leading-4 sm:text-xs">{title}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 min-h-10 text-xs leading-5 text-slate-500">{active.description} This visualization is educational and does not depict a specific clinical device or outcome.</p>
    </div>
  );
}
