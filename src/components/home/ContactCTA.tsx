import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:py-44">
      <Reveal className="flex flex-col items-center text-center">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
          Let&apos;s begin
        </span>
        <h2 className="mt-8 max-w-4xl font-display text-4xl font-light leading-[1.05] text-ink md:text-7xl">
          Have a site, a brief, or just a{" "}
          <span className="italic text-turq-deep">feeling?</span> Let&apos;s draw
          the first line.
        </h2>
        <Link
          href="/contact"
          data-cursor
          className="group mt-12 inline-flex items-center gap-4 rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-turq-deep"
        >
          Start a project
          <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
        </Link>
      </Reveal>
    </section>
  );
}
