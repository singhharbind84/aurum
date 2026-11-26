import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <article className="section-wrap max-w-3xl pb-24 pt-36">
        <div className="eyebrow">Legal information</div>
        <h1 className="display-heading mt-5 text-5xl">Privacy policy</h1>
        <p className="mt-5 text-sm text-slate-500">Demonstration template — have this policy reviewed and adapted before launch.</p>
        <div className="prose prose-slate mt-10 max-w-none">
          <h2>Information you provide</h2>
          <p>The appointment and contact forms collect the information you enter, such as your name, email address, phone number and message. Do not submit sensitive medical information through these demonstration forms.</p>
          <h2>How information is used</h2>
          <p>When configured, form submissions are emailed to the clinic using Resend so the team can respond to your enquiry. This site does not provide appointment confirmation automatically.</p>
          <h2>Retention and your rights</h2>
          <p>The clinic should define appropriate retention, access and deletion practices and publish its contact details here. Applicable privacy rights depend on your location.</p>
          <h2>Contact</h2>
          <p>Replace this section with the clinic’s verified privacy contact and jurisdiction-specific details before publishing.</p>
        </div>
      </article>
    </SiteShell>
  );
}
