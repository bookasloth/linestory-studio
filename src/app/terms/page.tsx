import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalNote from "@/components/LegalNote";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use — Linestory Studio",
  description: "The terms governing use of the Linestory Studio website.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader label="Legal" title="Terms of Use" />
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-4">
        <LegalNote />
        <article className="legal">
          <p>
            <strong>Last updated: 19 August 2026.</strong>
          </p>
          <p>
            These Terms of Use govern your access to and use of{" "}
            <a href={site.url}>{site.url}</a> (the “Site”), operated by{" "}
            <strong>{site.name}</strong> / <strong>[Registered Entity Name]</strong>.
            By using the Site you agree to these terms. If you do not agree,
            please do not use the Site.
          </p>

          <h2>1. Use of the Site</h2>
          <p>
            You may view and use the Site for lawful, personal and informational
            purposes. You agree not to misuse the Site, attempt to disrupt it, or
            access it in any way that breaches applicable law.
          </p>

          <h2>2. Intellectual property</h2>
          <p>
            All content on the Site — including text, branding, the Linestory
            name and mark, layouts and design — is owned by or licensed to{" "}
            <strong>{site.name}</strong> and protected by intellectual-property
            laws. You may not reproduce, distribute or create derivative works
            without our prior written permission.
          </p>

          <h2>3. Project imagery &amp; content</h2>
          <p>
            Project descriptions and images are shown for portfolio purposes.
            Some images may be representative or placeholder visuals. Nothing on
            the Site constitutes a professional proposal, quote or contract.
          </p>

          <h2>4. No professional advice</h2>
          <p>
            Information on the Site is general in nature and does not constitute
            architectural, engineering or other professional advice. Any
            engagement is governed by a separate written agreement.
          </p>

          <h2>5. External links</h2>
          <p>
            The Site may link to third-party websites. We are not responsible for
            the content, policies or practices of those sites.
          </p>

          <h2>6. Disclaimer of warranties</h2>
          <p>
            The Site is provided “as is” and “as available” without warranties of
            any kind, express or implied, including accuracy, availability or
            fitness for a particular purpose, to the fullest extent permitted by
            law.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, <strong>{site.name}</strong>{" "}
            shall not be liable for any indirect, incidental or consequential
            damages arising from your use of, or inability to use, the Site.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws of{" "}
            <strong>[India / your jurisdiction]</strong>, and any disputes are
            subject to the exclusive jurisdiction of the courts of{" "}
            <strong>[City]</strong>.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may revise these terms at any time. Continued use of the Site
            after changes constitutes acceptance of the revised terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
