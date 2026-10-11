/**
 * Placeholder image pipeline.
 *
 * Real photos always win: fill a project's `images: []` in data/projects.ts
 * (paths under /public/projects/<slug>/) and those are used verbatim.
 * Until then we serve free, keyword-tagged online placeholders so the site
 * reads as architecture — not random stock.
 *
 * Providers (both free, no key):
 *   - LoremFlickr  → architecture/interior photos, deterministic via ?lock=
 *   - pravatar.cc  → team portraits, deterministic via ?img=
 *
 * `lock`/`img` are derived from the slug so every render (build + client)
 * produces the same URL — no hydration mismatch, stable images per project.
 */

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const PHOTO_TAGS = "architecture,building,interior";

/** Ordered photos for a project: [hero, ...gallery]. */
export function projectPhotos(
  slug: string,
  provided: string[] = [],
  count = 4
): string[] {
  if (provided.length)
    return provided.map((p) =>
      p.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}` : p
    );
  const base = hash(slug);
  return Array.from(
    { length: count },
    (_, i) =>
      `https://loremflickr.com/1200/1500/${PHOTO_TAGS}?lock=${base + i * 7}`
  );
}

/** A single deterministic architecture placeholder. */
export function photo(seed: string, w = 1200, h = 1500): string {
  return `https://loremflickr.com/${w}/${h}/${PHOTO_TAGS}?lock=${hash(seed)}`;
}

/** Deterministic portrait for team members (pravatar has ~70 faces). */
export function avatar(seed: string): string {
  const n = (hash(seed) % 70) + 1;
  return `https://i.pravatar.cc/600?img=${n}`;
}
