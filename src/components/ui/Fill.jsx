import Pending from './Pending'

export const hasContent = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v))

/**
 * Renders children when `value` has content, otherwise a dev-only Pending marker.
 * <Fill value={data.items} label="8 services">…</Fill>
 */
export default function Fill({ value, label, className = '', children }) {
  if (hasContent(value)) return typeof children === 'function' ? children(value) : children
  return <Pending className={className}>{label} from clinic-content.md</Pending>
}

/** Paragraph array (or single string) → <p> elements. */
export function Paras({ value, className = '' }) {
  const list = Array.isArray(value) ? value : value ? [value] : []
  return list.map((p, i) => (
    <p key={i} className={className}>
      {p}
    </p>
  ))
}
