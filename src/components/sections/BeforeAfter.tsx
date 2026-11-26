"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

const beforeImage = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85";
const afterImage = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  return (
    <div className="relative aspect-[1.13/1] overflow-hidden rounded-[28px] bg-slate-200 shadow-2xl shadow-ink/10 sm:aspect-[1.25/1]">
      <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={beforeImage} alt="Illustrative dental image for demonstration" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={afterImage} alt="" aria-hidden="true" />
      </div>
      <span className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink backdrop-blur">Illustrative</span>
      <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-ink">Example A</span>
      <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-ink">Example B</span>
      <div className="absolute bottom-0 top-0 w-px bg-white shadow-[0_0_8px_rgba(16,42,67,.4)]" style={{ left: `${position}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white text-ink shadow-lg"><MoveHorizontal size={17} /></span>
      </div>
      <input
        aria-label="Compare illustrative images"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
    </div>
  );
}
