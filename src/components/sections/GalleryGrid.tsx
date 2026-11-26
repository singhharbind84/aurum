"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryImages } from "@/data/clinic";

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const change = (direction: number) => {
    if (active === null) return;
    setActive((active + direction + galleryImages.length) % galleryImages.length);
  };
  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const direction = event.key === "ArrowLeft" ? -1 : 1;
        setActive((current) => current === null ? null : (current + direction + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  return (
    <>
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            className={`group relative overflow-hidden rounded-[24px] text-left ${index === 0 || index === 3 ? "sm:row-span-2" : ""}`}
            onClick={() => setActive(index)}
            key={image.label}
            aria-label={`Open image: ${image.label}`}
          >
            <Image fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" src={image.src} alt={image.alt} />
            <span className="image-overlay absolute inset-0" />
            <span className="absolute bottom-5 left-5 text-sm font-medium text-white">{image.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#071827]/95 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white" aria-label="Close image viewer" onClick={() => setActive(null)}><X /></button>
            <button className="absolute left-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white sm:left-10" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); change(-1); }}><ArrowLeft /></button>
            <motion.figure key={active} className="max-h-[85vh] max-w-5xl" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(event) => event.stopPropagation()}>
              <Image width={1400} height={1000} className="max-h-[78vh] rounded-2xl object-contain" src={galleryImages[active].src} alt={galleryImages[active].alt} />
              <figcaption className="mt-4 text-center text-sm text-white/75">{galleryImages[active].label}</figcaption>
            </motion.figure>
            <button className="absolute right-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white sm:right-10" aria-label="Next image" onClick={(event) => { event.stopPropagation(); change(1); }}><ArrowRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
