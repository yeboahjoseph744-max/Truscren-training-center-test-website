"use client";

import { useMemo } from "react";

function buildPaths(position: number) {
  return Array.from({ length: 36 }, (_, i) => {
    const d =
      `M-${380 - i * 5 * position} -${189 + i * 6}` +
      `C-${380 - i * 5 * position} -${189 + i * 6} ` +
      `-${312 - i * 5 * position} ${216 - i * 6} ` +
      `${152 - i * 5 * position} ${343 - i * 6}` +
      `C${616 - i * 5 * position} ${470 - i * 6} ` +
      `${684 - i * 5 * position} ${875 - i * 6} ` +
      `${684 - i * 5 * position} ${875 - i * 6}`;
    return {
      id: `${position}-${i}`,
      d,
      width: (0.5 + i * 0.05).toFixed(2),
      duration: (20 + ((i * 7) % 10)).toFixed(1),
      delay: (-((i * 13) % 22)).toFixed(1),
    };
  });
}

export default function FloatingPaths() {
  // Deterministic values (no Math.random) to avoid hydration mismatch.
  const paths = useMemo(() => [...buildPaths(1), ...buildPaths(-1)], []);

  return (
    <div className="hero-paths" aria-hidden="true">
      <svg viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
        <title>Background Paths</title>
        {paths.map((p) => (
          <path
            key={p.id}
            d={p.d}
            strokeWidth={p.width}
            style={{
              strokeDasharray: 1200,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
