import { clinic } from '../../config/clinic'

/**
 * variant: "full" (lockup) | "mark" (mark only). Transparent PNGs, for light surfaces.
 * Height comes from className (e.g. "h-11 lg:h-12").
 */
export default function Logo({ variant = 'full', className = 'h-11', href = '#top' }) {
  const img =
    variant === 'mark' ? (
      <img src={clinic.logoMark} alt={clinic.name} className="h-full w-auto object-contain" width="304" height="310" />
    ) : (
      <img src={clinic.logo} alt={clinic.name} className="h-full w-auto object-contain" width="860" height="310" />
    )
  if (!href) return <span className={`inline-flex items-center ${className}`}>{img}</span>
  return (
    <a href={href} aria-label={`${clinic.name}, back to top`} className={`inline-flex items-center ${className}`}>
      {img}
    </a>
  )
}
