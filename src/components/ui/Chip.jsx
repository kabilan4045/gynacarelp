/** Small, quiet pill label (e.g. areas of interest). */
export default function Chip({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium leading-snug text-ink ${className}`}>
      {children}
    </span>
  )
}
