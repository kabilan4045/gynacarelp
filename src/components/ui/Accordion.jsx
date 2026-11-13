import { useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Plus that becomes a minus (vertical bar collapses). */
function PlusMinus({ open }) {
  return (
    <span aria-hidden="true" className="relative mt-1.5 grid size-5 shrink-0 place-items-center text-accent">
      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
      <span
        className={`absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-300 ${open ? 'scale-y-0' : 'scale-y-100'}`}
      />
    </span>
  )
}

/**
 * Hairline-divided accordion.
 * items: [{ q: string, a: string | string[] | ReactNode }]
 * headingLevel: 3 by default; use 4 when the accordion sits under an h3.
 * Keyboard: Enter/Space toggles (native button), ArrowUp/ArrowDown/Home/End move between questions.
 */
export default function Accordion({ items = [], defaultOpen = null, allowMultiple = false, headingLevel = 3, className = '' }) {
  const H = `h${headingLevel}`
  const [open, setOpen] = useState(() => (defaultOpen === null ? [] : [defaultOpen]))
  const baseId = useId()
  const btns = useRef([])

  const toggle = (i) =>
    setOpen((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : allowMultiple ? [...cur, i] : [i]))

  const onKeyDown = (e, i) => {
    const last = items.length - 1
    const to = { ArrowDown: i === last ? 0 : i + 1, ArrowUp: i === 0 ? last : i - 1, Home: 0, End: last }[e.key]
    if (to === undefined) return
    e.preventDefault()
    btns.current[to]?.focus()
  }

  return (
    <div className={`border-t border-line ${className}`}>
      {items.map((item, i) => {
        const isOpen = open.includes(i)
        const btnId = `${baseId}-q${i}`
        const panelId = `${baseId}-a${i}`
        return (
          <div key={i} className="border-b border-line">
            <H className="font-body">
              <button
                ref={(el) => (btns.current[i] = el)}
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`flex w-full items-start justify-between gap-6 py-5 text-left font-body text-h4 font-semibold transition-colors hover:text-accent ${isOpen ? 'text-accent' : 'text-ink'}`}
              >
                <span>{item.q}</span>
                <PlusMinus open={isOpen} />
              </button>
            </H>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-prose space-y-3 pb-6 pr-6 text-muted sm:pr-10">
                    {Array.isArray(item.a) ? item.a.map((p, j) => <p key={j}>{p}</p>) : typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
