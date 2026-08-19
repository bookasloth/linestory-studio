/**
 * WeaveMark — a basket-weave diamond echoing the Linestory logo, built as
 * plain SVG rounded bars so it can be animated (each bar carries the
 * `weave-bar` class). Colors alternate turquoise / gold in a woven rhythm.
 *
 * Pure render — animation lives in whatever parent scopes it (see Hero).
 */
const GRID = 6; // 6 x 6 cells
const CELL = 46;
const BAR_LEN = 38;
const BAR_THICK = 13;

export default function WeaveMark({ className = "" }: { className?: string }) {
  const span = GRID * CELL; // 276
  const half = span / 2;
  // viewBox must contain the diamond (grid rotated 45°): diagonal = span * √2
  const box = Math.ceil(span * 1.42);
  const center = box / 2;

  const bars = [];
  for (let r = 0; r < GRID; r++) {
    for (let c = 0; c < GRID; c++) {
      const horizontal = r % 2 === 0;
      const turquoise = (r + c) % 2 === 0;
      const cx = -half + c * CELL + CELL / 2;
      const cy = -half + r * CELL + CELL / 2;
      const w = horizontal ? BAR_LEN : BAR_THICK;
      const h = horizontal ? BAR_THICK : BAR_LEN;
      bars.push(
        <rect
          key={`${r}-${c}`}
          className="weave-bar"
          x={cx - w / 2}
          y={cy - h / 2}
          width={w}
          height={h}
          rx={BAR_THICK / 2}
          fill={turquoise ? "var(--color-turq)" : "var(--color-gold)"}
        />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${box} ${box}`}
      className={className}
      role="img"
      aria-label="Linestory woven mark"
    >
      <g transform={`translate(${center} ${center}) rotate(45)`}>{bars}</g>
    </svg>
  );
}
