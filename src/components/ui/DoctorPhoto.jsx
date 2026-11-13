import { useState } from 'react'
import { images } from '../../data/images'

const INITIALS = { dinesh: 'DV', shobhna: 'S' }

/**
 * Arched-top photo frame for the doctors. The photo comes from src/data/images.js
 * (currently TEMPORARY stock placeholders). If the file is missing, it falls back
 * to initials on an accent-soft gradient, so the page never shows a broken image.
 * doctor: "dinesh" | "shobhna"   size: "sm" (thumbnail) | "lg"
 * tint: optional CSS colour for the fallback (defaults to the live accent)
 * priority: true for above-the-fold use (hero cards)
 * decorative: true when the doctor's name is already given next to the photo
 */
export default function DoctorPhoto({ doctor = 'dinesh', size = 'lg', tint, priority = false, decorative = false, className = '' }) {
  const photo = images.doctors[doctor] ?? images.doctors.dinesh
  const [failed, setFailed] = useState(false)
  const soft = tint ? `color-mix(in srgb, ${tint} 12%, white)` : 'var(--accent-soft)'

  return (
    <figure
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-t-full border border-line ${size === 'sm' ? 'rounded-b-input' : 'rounded-b-card'} ${className}`}
      style={{ background: `linear-gradient(160deg, ${soft} 0%, var(--surface) 100%)` }}
    >
      {!failed ? (
        <img
          src={photo.src}
          alt={decorative ? '' : photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: photo.position }}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center pt-[12%]" aria-hidden="true">
          <span
            className={`font-heading font-semibold tracking-tight ${size === 'sm' ? 'text-h4' : 'text-[clamp(3rem,10vw,5.5rem)]'}`}
            style={{ color: tint ?? 'var(--accent)', opacity: 0.85 }}
          >
            {INITIALS[doctor]}
          </span>
        </div>
      )}
    </figure>
  )
}
