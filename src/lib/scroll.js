export const cssPx = (name) =>
  parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Keep `el` at the same spot on screen while content above it changes height
 * (e.g. the lane swap above the doctor profile). Runs for `ms` to cover the
 * AnimatePresence exit/enter. Works alongside native scroll anchoring.
 */
/**
 * Keep whatever the reader is looking at in place: anchors on the section
 * under a reading line just below the fixed chrome (header + sticky toggle).
 */
export function keepViewInPlace(ms) {
  const line = cssPx('--header-h') + cssPx('--subnav-h') + 24
  const sections = [...document.querySelectorAll('main > section')].filter((s) => s.id !== 'specialities')
  const inView = sections.find((s) => s.getBoundingClientRect().bottom > line)
  keepInPlace(inView, ms)
}

export function keepInPlace(el, ms = 900) {
  if (!el) return
  const target = el.getBoundingClientRect().top
  const end = performance.now() + ms
  const tick = () => {
    const drift = el.getBoundingClientRect().top - target
    if (Math.abs(drift) > 0.5) window.scrollBy(0, drift)
    if (performance.now() < end) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
