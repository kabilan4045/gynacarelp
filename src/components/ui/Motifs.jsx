/**
 * Faint background motifs drawn from the logo (DESIGN.md rule 12).
 * Decorative only: aria-hidden, pointer-events none, opacity ≤ 0.5.
 */

// Neural dots joined by thin lines, like the left half of the logo mark.
const NODES = [
  [20, 30], [70, 18], [120, 44], [52, 78], [104, 98], [158, 82], [30, 132], [84, 150],
  [140, 140], [196, 120], [60, 196], [116, 204], [176, 186], [226, 170], [24, 244], [92, 256],
  [150, 250], [208, 236],
]
const EDGES = [
  [0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [4, 5], [3, 6], [6, 7], [4, 7], [7, 8], [5, 9], [8, 9],
  [7, 10], [10, 11], [8, 12], [11, 12], [9, 13], [12, 13], [10, 14], [14, 15], [11, 15], [15, 16], [12, 17], [16, 17],
]

export function NeuralPattern({ className = '', color = 'var(--brand-indigo)', opacity = 0.22 }) {
  return (
    <svg
      viewBox="0 0 240 280"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      fill="none"
    >
      <g stroke={color} strokeWidth="1" strokeLinecap="round">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      <g fill={color}>
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2.5} />
        ))}
      </g>
    </svg>
  )
}

// Flowing curves and small leaves, like the right half of the logo mark.
function Leaf({ x, y, r = 0, s = 1, color }) {
  return (
    <path
      d="M0 0 C 10 -14, 30 -16, 40 -4 C 28 6, 10 8, 0 0 Z"
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
      fill={color}
    />
  )
}

export function LeafCurves({ className = '', color = 'var(--brand-magenta)', opacity = 0.18 }) {
  return (
    <svg
      viewBox="0 0 320 320"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      fill="none"
    >
      <g stroke={color} strokeWidth="1.25" strokeLinecap="round">
        <path d="M30 300 C 90 230, 120 150, 210 110 S 300 40, 310 10" />
        <path d="M70 310 C 130 250, 170 190, 240 165 S 305 120, 318 90" />
        <path d="M10 250 C 60 200, 80 140, 140 100" />
      </g>
      <Leaf x={150} y={150} r={-40} s={1.1} color={color} />
      <Leaf x={196} y={118} r={-70} s={0.9} color={color} />
      <Leaf x={232} y={160} r={-20} s={1} color={color} />
      <Leaf x={110} y={210} r={-55} s={0.8} color={color} />
      <Leaf x={270} y={64} r={-60} s={0.75} color={color} />
    </svg>
  )
}
