/**
 * Dev-only marker for copy that must come from clinic-content.md.
 * Renders nothing in production builds, so no invented text can ship.
 */
export default function Pending({ children, className = '' }) {
  if (!import.meta.env.DEV) return null
  return (
    <p
      className={`rounded-input border border-dashed border-accent/40 bg-accent-soft/50 px-4 py-3 text-sm text-muted ${className}`}
    >
      <span className="eyebrow mr-2 text-accent">Pending</span>
      {children}
    </p>
  )
}
