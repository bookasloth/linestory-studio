"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonials } from "@/data/site";

gsap.registerPlugin(useGSAP);

export default function Testimonials() {
  const [i, setI] = useState(0);
  const iRef = useRef(0);
  const quote = useRef<HTMLDivElement>(null);

  const go = (next: number) => {
    iRef.current = next;
    if (!quote.current) return setI(next);
    gsap.to(quote.current, {
      opacity: 0,
      y: -16,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setI(next);
        gsap.fromTo(
          quote.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }
        );
      },
    });
  };

  // Auto-advance every 6s.
  useGSAP(() => {
    const id = setInterval(
      () => go((iRef.current + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="bg-turq-deep py-28 text-cream md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-cream/50">
          In their words
        </span>
        <div ref={quote} className="mt-10">
          <p className="font-display text-2xl font-light leading-[1.35] md:text-4xl">
            <span className="text-gold">“</span>
            {t.quote}
            <span className="text-gold">”</span>
          </p>
          <p className="mt-8 text-sm font-medium tracking-wide">{t.name}</p>
          <p className="text-sm text-cream/60">{t.role}</p>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => idx !== i && go(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-gold" : "w-2 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
