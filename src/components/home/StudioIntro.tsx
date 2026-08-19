import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import WeaveMark from "@/components/WeaveMark";

export default function StudioIntro() {
  return (
    <section className="relative overflow-hidden bg-cream-deep/50 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.3fr]">
        <Reveal className="flex justify-center">
          <div className="w-56 opacity-90 md:w-72">
            <WeaveMark className="h-auto w-full" />
          </div>
        </Reveal>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
            The Studio
          </span>
          <p className="mt-6 font-display text-2xl font-light leading-[1.3] text-ink md:text-4xl">
            We are an architecture and interiors practice that treats every
            drawing as a{" "}
            <span className="italic text-turq-deep">narrative</span> — a sequence
            of lines that resolve into places people remember.
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
            Working across homes, hospitality and civic projects, we begin with
            site, light and the way people actually live — then draw, test and
            refine until the building feels inevitable.
          </p>
          <Link
            href="/studio"
            data-cursor
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-ink"
          >
            About the studio
            <span className="h-px w-10 bg-turq-deep transition-all duration-300 group-hover:w-16" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
