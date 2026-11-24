import type { Project } from "@/content/site";

// Abstract cover art drawn in SVG, so no photos are needed.
// Swap it for an <img> of your own screenshots whenever you like.
export function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  const { from, to, ink, pattern } = project.cover;
  const id = `g-${project.slug}`;
  return (
    <svg
      viewBox="0 0 800 560"
      className={className}
      role="img"
      aria-label={`Abstract cover art for ${project.title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="800" height="560" fill={`url(#${id})`} />
      {pattern === "orbits" && (
        <g fill="none" stroke={ink} strokeWidth="1.5">
          {[60, 110, 160, 210, 260, 310].map((r, i) => (
            <circle key={r} cx="560" cy="300" r={r} opacity={0.85 - i * 0.12} />
          ))}
          <circle cx="560" cy="300" r="14" fill={ink} stroke="none" />
          <circle cx="410" cy="190" r="9" fill={ink} stroke="none" />
          <circle cx="700" cy="470" r="6" fill={ink} stroke="none" />
          <path d="M80 460 L300 460" strokeWidth="3" />
          <path d="M80 490 L220 490" strokeWidth="3" opacity="0.6" />
        </g>
      )}
      {pattern === "grid" && (
        <g>
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => {
              const x = 90 + col * 80;
              const y = 80 + row * 80;
              const shape = (row * 9 + col) % 4;
              return shape === 0 ? (
                <circle key={`${row}-${col}`} cx={x} cy={y} r="22" fill={ink} />
              ) : shape === 1 ? (
                <rect key={`${row}-${col}`} x={x - 22} y={y - 22} width="44" height="44" rx="8" fill="none" stroke={ink} strokeWidth="2" />
              ) : shape === 2 ? (
                <path key={`${row}-${col}`} d={`M${x - 22} ${y + 22} A44 44 0 0 1 ${x + 22} ${y - 22} L${x + 22} ${y + 22}Z`} fill={ink} opacity="0.75" />
              ) : (
                <circle key={`${row}-${col}`} cx={x} cy={y} r="4" fill={ink} />
              );
            }),
          )}
        </g>
      )}
      {pattern === "waves" && (
        <g fill="none" stroke={ink} strokeWidth="2">
          {Array.from({ length: 11 }).map((_, i) => (
            <path
              key={i}
              d={`M-20 ${110 + i * 36} C 160 ${60 + i * 36}, 300 ${180 + i * 36}, 460 ${110 + i * 36} S 720 ${50 + i * 36}, 820 ${120 + i * 36}`}
              opacity={0.25 + (i % 4) * 0.2}
            />
          ))}
        </g>
      )}
      {pattern === "bars" && (
        <g fill={ink}>
          {[180, 240, 210, 300, 270, 360, 330, 420, 390].map((h, i) => (
            <rect key={i} x={110 + i * 66} y={480 - h} width="38" height={h} rx="4" opacity={0.45 + i * 0.06} />
          ))}
          <path d="M110 230 L176 200 L242 214 L308 150 L374 168 L440 110 L506 124 L572 70 L638 86" fill="none" stroke={ink} strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
