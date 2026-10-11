"use client";

import { useEffect, useRef } from "react";

/**
 * Media — renders a real photo when provided, otherwise a branded, on-brand
 * placeholder. If the primary image fails to load (e.g. LoremFlickr hiccup),
 * it falls back once to a deterministic picsum image before giving up.
 */
export default function Media({
  src,
  alt,
  label,
  index = 0,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  label?: string;
  index?: number;
  className?: string;
  /** Set on the LCP/hero image so it loads eagerly instead of lazily. */
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const seed = encodeURIComponent(label ?? alt ?? String(index));
  const fallback = (img: HTMLImageElement) => {
    if (img.dataset.fallback) return; // already tried — stop, avoid loop
    img.dataset.fallback = "1";
    img.src = `https://picsum.photos/seed/${seed}-${index}/1200/1500`;
  };

  // Eager images can fail before hydration attaches onError — catch those.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) fallback(img);
  });

  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onError={(e) => fallback(e.currentTarget)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  // Deterministic two-tone weave placeholder
  const tone = index % 2 === 0 ? "var(--color-turq-deep)" : "var(--color-ink)";
  const id = `ph-${index}`;
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={tone} />
            <stop offset="1" stopColor="var(--color-turq)" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${id})`} />
        {/* faint woven strokes */}
        <g stroke="rgba(245,242,234,0.10)" strokeWidth="10">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`a${i}`} x1={-100 + i * 50} y1="0" x2={100 + i * 50} y2="500" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`b${i}`} x1={500 - i * 50} y1="0" x2={300 - i * 50} y2="500" />
          ))}
        </g>
        <text
          x="28"
          y="470"
          fill="rgba(245,242,234,0.85)"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="30"
          fontStyle="italic"
        >
          {label ?? "Linestory"}
        </text>
      </svg>
    </div>
  );
}
