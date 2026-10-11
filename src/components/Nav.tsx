"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import { nav } from "@/data/site";

gsap.registerPlugin(useGSAP);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const menu = useRef<HTMLDivElement>(null);

  // Solidify the bar after leaving the very top of the page.
  useGSAP(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Park the overlay off-screen once on mount (no inline display juggling,
  // so the md:hidden class always wins on desktop).
  useGSAP(() => {
    if (menu.current) gsap.set(menu.current, { yPercent: -100 });
  }, []);

  // Slide the overlay in/out whenever `open` flips.
  useGSAP(
    () => {
      if (!menu.current) return;
      if (open) {
        gsap.to(menu.current, { yPercent: 0, duration: 0.6, ease: "expo.out" });
        gsap.fromTo(
          ".m-link",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.07, delay: 0.15, ease: "expo.out" }
        );
      } else {
        gsap.to(menu.current, {
          yPercent: -100,
          duration: 0.5,
          ease: "expo.in",
        });
      }
    },
    { dependencies: [open], scope: menu }
  );

  const close = () => setOpen(false);

  // Homepage carries its own sidebar nav.
  if (pathname === "/") return null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-turq-deep px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink"
          >
            Start a project
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => (open ? close() : setOpen(true))}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-all ${
                open ? "bottom-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile overlay */}
      <div
        ref={menu}
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-cream px-8 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={close}
            className="m-link font-display text-5xl font-light text-ink"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={close}
          className="m-link mt-6 text-sm uppercase tracking-[0.3em] text-turq-deep"
        >
          Start a project →
        </Link>
      </div>
    </header>
  );
}
