/**
 * Content photograph. Fixed aspect ratio (no layout shift), object-cover crop,
 * card radius, hairline border — no overlays, shadows or filters.
 * image: an entry from src/data/images.js
 * ratio: a Tailwind aspect class, e.g. "aspect-[4/3]"
 */
export default function Photo({ image, ratio = 'aspect-[4/3]', priority = false, radius = 'rounded-card', className = '' }) {
  return (
    <figure className={`relative overflow-hidden border border-line bg-accent-soft ${radius} ${ratio} ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' } : {})}
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: image.position ?? '50% 50%' }}
      />
    </figure>
  )
}
