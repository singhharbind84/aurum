import type { MetadataRoute } from "next";
import { treatments } from "@/data/clinic";

const baseUrl = "https://dentora.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/treatments", "/doctors", "/gallery", "/contact", "/book-appointment", "/privacy-policy", "/terms-and-conditions"];
  return [
    ...pages.map((page) => ({ url: `${baseUrl}${page}`, lastModified: new Date() })),
    ...treatments.map((treatment) => ({ url: `${baseUrl}/treatments/${treatment.slug}`, lastModified: new Date() })),
  ];
}
