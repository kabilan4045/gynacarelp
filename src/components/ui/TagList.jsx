/**
 * Compact list of service names.
 * - Phones: a 2-column grid of small boxes, one item per box (easy to scan, little height).
 * - sm and up: wrapping rounded tags, several per line.
 * tone: "plain" (white, hairline border) | "soft" (accent-tinted)
 */
export default function TagList({ items = [], tone = 'plain', className = '' }) {
  const look =
    tone === 'soft'
      ? 'bg-accent-soft text-accent-strong border-transparent'
      : 'bg-surface text-ink border-line'
  return (
    <ul className={`grid grid-cols-2 gap-2 sm:flex sm:flex-wrap ${className}`}>
      {items.map((it) => (
        <li
          key={it}
          className={`flex items-center rounded-input border px-3 py-2.5 text-sm font-medium leading-snug sm:rounded-full sm:px-3.5 sm:py-1.5 sm:font-normal ${look}`}
        >
          {it}
        </li>
      ))}
    </ul>
  )
}
