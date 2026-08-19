import Link from "next/link";
import Logo from "./Logo";
import { site, nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="[&_span]:text-cream">
              <Logo light />
            </div>
            <p className="mt-6 max-w-xs font-display text-2xl font-light italic text-cream/80">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
              Menu
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
              Studio
            </p>
            <ul className="mt-5 space-y-3 text-cream/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
            <div className="mt-5 flex gap-4">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
