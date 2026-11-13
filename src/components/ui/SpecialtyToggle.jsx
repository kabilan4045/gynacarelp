import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useSpecialty } from '../../context/SpecialtyContext'
import { specialtyToggle } from '../../data/shared'

const OPTIONS = ['neuro', 'womens']

/**
 * Two-option pill tablist. The active background slides (layoutId) and
 * picks up the live --accent, so its colour fades with the page theme.
 * compact: the slimmer version used in the sticky bar.
 * idPrefix: must be unique per instance on the page.
 */
export default function SpecialtyToggle({
  compact = false,
  idPrefix = 'spec',
  controls = 'specialty-content',
  onSelect,
  className = '',
}) {
  const { specialty, setSpecialty } = useSpecialty()
  const refs = useRef({})

  const select = (key, focus = false) => {
    if (key !== specialty) onSelect?.(key)
    setSpecialty(key)
    if (focus) refs.current[key]?.focus()
  }

  const onKeyDown = (e) => {
    const i = OPTIONS.indexOf(specialty)
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = OPTIONS[(i + 1) % OPTIONS.length]
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = OPTIONS[(i - 1 + OPTIONS.length) % OPTIONS.length]
    if (e.key === 'Home') next = OPTIONS[0]
    if (e.key === 'End') next = OPTIONS[OPTIONS.length - 1]
    if (next) {
      e.preventDefault()
      select(next, true)
    }
  }

  return (
    <div
      role="tablist"
      aria-label={specialtyToggle.label}
      onKeyDown={onKeyDown}
      className={`relative grid grid-cols-2 rounded-full border border-line bg-surface p-1 ${
        compact ? 'w-full sm:w-auto sm:min-w-[420px]' : 'w-full sm:w-auto sm:min-w-[560px] shadow-soft'
      } ${className}`}
    >
      {OPTIONS.map((key) => {
        const active = specialty === key
        return (
          <button
            key={key}
            ref={(el) => (refs.current[key] = el)}
            id={`${idPrefix}-tab-${key}`}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={controls}
            tabIndex={active ? 0 : -1}
            onClick={() => select(key)}
            className={`relative z-0 flex items-center justify-center rounded-full px-3 text-center font-semibold leading-tight transition-colors duration-300 focus-visible:outline-offset-1 ${
              compact ? 'min-h-10 text-sm' : 'min-h-12 py-2 text-sm sm:min-h-14 sm:px-6 sm:text-base'
            } ${active ? 'text-white' : 'text-muted hover:text-ink'}`}
          >
            {active && (
              <motion.span
                layoutId={`${idPrefix}-pill`}
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            {specialtyToggle[key]}
          </button>
        )
      })}
    </div>
  )
}
