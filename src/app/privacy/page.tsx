import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalNote from "@/components/LegalNote";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Linestory Studio",
  description: "How Linestory Studio collects and handles your data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader label="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-4">
        <LegalNote />
        <article className="legal">
          <p>
            <strong>Last updated: 19 August 2026.</strong>
          </p>
          <p>
            This Privacy Policy explains how <strong>{site.name}</strong> (“we”,
            “us”, “our”), operated by <strong>[Registered Entity Name]</strong>{" "}
            of <strong>[Registered Address]</strong>, collects, uses and
            protects information when you visit{" "}
            <a href={site.url}>{site.url}</a> (the “Site”).
          </p>

          <h2>1. Information we collect</h2>
          <p>We keep data collection to a minimum. We may collect:</p>
          <ul>
            <li>
              <strong>Contact details you provide</strong> — when you submit the
              contact form (name, email, project location and your message).
            </li>
            <li>
              <strong>Aggregate analytics</strong> — anonymous, cookie-free usage
              statistics (pages viewed, approximate region, device type) via
              Plausible Analytics. This data cannot identify you.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> collect payment details, and we do not use
            advertising or tracking cookies.
          </p>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and discuss potential projects.</li>
            <li>To understand, in aggregate, how the Site is used and improve it.</li>
            <li>To comply with legal obligations where applicable.</li>
          </ul>

          <h2>3. Legal basis</h2>
          <p>
            Where applicable law requires a legal basis, we rely on your{" "}
            <strong>consent</strong> (when you contact us) and our{" "}
            <strong>legitimate interest</strong> in operating and improving the
            Site.
          </p>

          <h2>4. Sharing &amp; processors</h2>
          <p>
            We do not sell your data. We share it only with service providers
            that help us operate the Site:
          </p>
          <ul>
            <li>
              <strong>Form processing</strong> — contact-form submissions are
              delivered via <strong>[Formspree / your provider]</strong>.
            </li>
            <li>
              <strong>Analytics</strong> — Plausible Analytics (privacy-focused,
              EU-hosted, no cookies).
            </li>
            <li>
              <strong>Hosting</strong> — the Site is hosted by{" "}
              <strong>[Hosting Provider]</strong>.
            </li>
          </ul>

          <h2>5. Data retention</h2>
          <p>
            We keep enquiry correspondence only as long as needed to respond and
            for our legitimate business records, then delete it. Aggregate
            analytics contains no personal data.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction of,
            or deletion of your personal data, and you may withdraw consent at
            any time. To exercise these rights, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>7. Security</h2>
          <p>
            We take reasonable measures to protect your information, but no
            method of transmission over the internet is completely secure.
          </p>

          <h2>8. Children</h2>
          <p>
            The Site is not directed at children under 16, and we do not
            knowingly collect their data.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The “last updated” date
            above reflects the latest version.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or write to{" "}
            <strong>[Registered Address]</strong>.
          </p>
        </article>
      </section>
    </main>
  );
}
