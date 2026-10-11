import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Linestory Studio",
  description: "Start a project with Linestory Studio.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        label="Say hello"
        title="Start a project."
        intro="Tell us about your site, your brief, or just the feeling you're after. We read every message ourselves."
      />

      <section className="mx-auto max-w-7xl px-6 pb-32 pt-8">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="space-y-10">
            <Detail label="Email">
              <a
                href={`mailto:${site.email}`}
                className="font-display text-2xl font-light text-ink hover:text-turq-deep"
              >
                {site.email}
              </a>
            </Detail>
            <Detail label="Phone">
              <a
                href={`tel:${site.phone}`}
                className="font-display text-2xl font-light text-ink hover:text-turq-deep"
              >
                {site.phone}
              </a>
            </Detail>
            <Detail label="Studio">
              <p className="font-display text-2xl font-light text-ink">
                {site.location}
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted">{site.address}</p>
            </Detail>
            <Detail label="Follow">
              <div className="flex gap-5">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink-soft transition-colors hover:text-turq-deep"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Detail>
          </Reveal>
        </div>
      </section>

      {/* Full-width map (keyless embed) */}
      <section aria-label="Studio location map" className="w-full">
        <iframe
          title="Linestory Studio on Google Maps"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.name}, ${site.address}`)}&output=embed`}
          className="block h-[60vh] min-h-96 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main>
  );
}

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
