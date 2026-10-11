/**
 * WeaveMark — the real Linestory woven mark (public/logo-mark.png).
 * Was a code-drawn SVG stand-in; every usage now gets the actual artwork.
 */
export default function WeaveMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-mark.png`}
      alt="Linestory woven mark"
      className={`object-contain ${className}`}
    />
  );
}
