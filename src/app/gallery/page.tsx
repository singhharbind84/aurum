import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = { title: "Gallery", description: "Explore illustrative imagery from the Dentora studio concept." };

export default function GalleryPage() {
  return (
    <SiteShell>
      <section className="section-wrap pb-24 pt-36">
        <div className="eyebrow">Take a look around</div>
        <h1 className="display-heading mt-5 text-5xl sm:text-6xl">Spaces made for feeling at ease.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Explore our image gallery. These photographs are illustrative demonstration imagery and should be replaced with images of your clinic.</p>
        <div className="mt-12"><GalleryGrid /></div>
      </section>
    </SiteShell>
  );
}
