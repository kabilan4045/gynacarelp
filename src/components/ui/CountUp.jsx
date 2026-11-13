import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

const fmt = (n) => Math.round(n).toLocaleString('en-IN')

/** Counts from 0 to `to` once, the first time it scrolls into view. */
export default function CountUp({ to, suffix = '', duration = 1.4, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) return setValue(to)
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setValue })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {/* Screen readers get the final value straight away */}
      <span className="sr-only">
        {fmt(to)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {fmt(value)}
        {suffix}
      </span>
    </span>
  )
}
