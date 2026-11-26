import type { Metadata } from "next";
import { clinic } from "@/data/clinic";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dentora.example"),
  title: {
    default: `${clinic.name} | ${clinic.descriptor}`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Discover advanced dental care designed around your comfort, confidence and perfect smile.",
  openGraph: {
    title: `${clinic.name} — ${clinic.tagline}`,
    description:
      "A premium dental studio concept. Explore considered care, modern technology and a welcoming patient experience.",
    url: "https://dentora.example",
    siteName: clinic.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
