import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="section-wrap max-w-3xl pb-24 pt-36">
        <div className="eyebrow">Legal information</div>
        <h1 className="display-heading mt-5 text-5xl">Terms and conditions</h1>
        <p className="mt-5 text-sm text-slate-500">Demonstration template — obtain appropriate legal review before launch.</p>
        <div className="prose prose-slate mt-10 max-w-none">
          <h2>Website information</h2>
          <p>This website is an illustrative demonstration. Clinic details, imagery, staff profiles and treatment content must be verified and replaced by the clinic before publication.</p>
          <h2>Appointment enquiries</h2>
          <p>Submitting an online enquiry does not confirm an appointment or establish a dentist-patient relationship. The clinic will contact you to discuss availability and next steps.</p>
          <h2>Clinical information</h2>
          <p>Website content is general information, not medical or dental advice. Consult a qualified dental professional regarding individual care.</p>
          <h2>Contact</h2>
          <p>Add the clinic’s verified legal name, address and jurisdiction-specific terms before launch.</p>
        </div>
      </article>
    </SiteShell>
  );
}
