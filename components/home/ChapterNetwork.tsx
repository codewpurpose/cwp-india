/**
 * Hub-and-spoke chapter network: CWP India at the centre, chapter cities
 * around it, dashed connectors flowing outward. Pure CSS animation
 * (home-flow-dash / cwp-pulse / cwp-spin) so it renders without client JS.
 */
const CITIES: {
  x: number;
  y: number;
  label: string;
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
}[] = [
  { x: 200, y: 46, label: "Delhi", anchor: "middle", dx: 0, dy: -14 },
  { x: 120, y: 78, label: "Jaipur", anchor: "middle", dx: 0, dy: -14 },
  { x: 62, y: 158, label: "Mumbai", anchor: "middle", dx: 0, dy: -14 },
  { x: 96, y: 218, label: "Pune", anchor: "middle", dx: 0, dy: 22 },
  { x: 168, y: 268, label: "Hyderabad", anchor: "middle", dx: 0, dy: 22 },
  { x: 246, y: 262, label: "Bengaluru", anchor: "middle", dx: 0, dy: 22 },
  { x: 300, y: 210, label: "Chennai", anchor: "middle", dx: 0, dy: 22 },
  { x: 336, y: 122, label: "Kolkata", anchor: "middle", dx: 0, dy: -14 },
  { x: 330, y: 62, label: "Guwahati", anchor: "middle", dx: 0, dy: -14 },
];

const CX = 200;
const CY = 152;

export function ChapterNetwork() {
  return (
    <svg
      viewBox="0 0 400 310"
      fill="none"
      role="img"
      aria-label="CWP India chapters connected across the country"
      className="h-auto w-full"
    >
      <defs>
        <radialGradient id="network-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(219,239,219,0.85)" />
          <stop offset="100%" stopColor="rgba(219,239,219,0)" />
        </radialGradient>
      </defs>
      <rect x="80" y="32" width="240" height="240" rx="60" fill="url(#network-glow)" opacity="0.5" />

      {/* Orbit rings around the hub — one slowly turning. */}
      <circle
        cx={CX}
        cy={CY}
        r="58"
        stroke="#cecece"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
      <circle
        cx={CX}
        cy={CY}
        r="96"
        stroke="#cecece"
        strokeWidth="1"
        strokeDasharray="2 5"
        className="cwp-spin"
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />

      {/* Connectors */}
      {CITIES.map((c) => (
        <path
          key={c.label}
          className="home-flow-dash"
          d={`M${CX} ${CY} L${c.x} ${c.y}`}
          stroke="#3e7f5c"
          strokeWidth="1"
          opacity="0.45"
        />
      ))}

      {/* City nodes */}
      {CITIES.map((c, i) => (
        <g key={c.label}>
          <circle
            cx={c.x}
            cy={c.y}
            r="8"
            fill="none"
            stroke="#3e7f5c"
            strokeWidth="1.2"
            className="cwp-pulse"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
          <circle cx={c.x} cy={c.y} r="3.5" fill="#3e7f5c" />
          <text
            x={c.x + c.dx}
            y={c.y + c.dy}
            textAnchor={c.anchor}
            className="fill-[var(--home-moss)]"
            style={{
              fontFamily: "var(--font-home-serif), Georgia, serif",
              fontSize: 11,
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            {c.label}
          </text>
        </g>
      ))}

      {/* Hub */}
      <rect
        x={CX - 34}
        y={CY - 22}
        width="68"
        height="44"
        rx="10"
        fill="#1e3c2c"
      />
      <text
        x={CX}
        y={CY - 2}
        textAnchor="middle"
        fill="#dbefdb"
        style={{
          fontFamily: "var(--font-home-mono), ui-monospace, monospace",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.08em",
        }}
      >
        CWP
      </text>
      <text
        x={CX}
        y={CY + 13}
        textAnchor="middle"
        fill="#dbefdb"
        opacity="0.7"
        style={{
          fontFamily: "var(--font-home-mono), ui-monospace, monospace",
          fontSize: 8,
          letterSpacing: "0.22em",
        }}
      >
        INDIA
      </text>
    </svg>
  );
}
