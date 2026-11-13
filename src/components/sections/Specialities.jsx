import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SpecialtyToggle from '../ui/SpecialtyToggle'
import TagList from '../ui/TagList'
import Pending from '../ui/Pending'
import NeuroLane from './neuro/NeuroLane'
import WomensLane from './womens/WomensLane'
import { keepViewInPlace } from '../../lib/scroll'
import { specialitiesIntro } from '../../data/shared'
import { overview as neuroOverview } from '../../data/neuro'
import { overview as womensOverview } from '../../data/womens'
import { ArrowDown } from 'lucide-react'
import { prefersReducedMotion } from '../../lib/scroll'
import { useSpecialty } from '../../context/SpecialtyContext'

const px = (name) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0

// Switching from the sticky bar:
// - while reading a lane: jump to the start of the new lane
// - below the lanes (doctor, why us…): stay where you are while the lane above changes height
const scrollToLaneStart = () => {
  const el = document.getElementById('specialty-content')
  if (!el) return
  const rect = el.getBoundingClientRect()
  const chrome = px('--header-h') + px('--subnav-h')
  if (rect.bottom <= chrome + 1) return keepViewInPlace()
  const top = rect.top + window.scrollY - chrome - 16
  if (window.scrollY > top) window.scrollTo({ top, behavior: 'auto' })
}

/**
 * Compact toggle pinned under the header once the main toggle has scrolled
 * past, until the end of the FAQ section.
 */
function StickyToggle({ anchorRef }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      const anchor = anchorRef.current
      if (!anchor) return
      const headerH = px('--header-h')
      const passedToggle = anchor.getBoundingClientRect().bottom < headerH
      const faqs = document.getElementById('faqs')
      const beforeFaqEnd = faqs ? faqs.getBoundingClientRect().bottom > headerH + px('--subnav-h') + 40 : true
      setShow(passedToggle && beforeFaqEnd)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [anchorRef])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-x-0 top-[var(--header-h)] z-40 flex h-[var(--subnav-h)] items-center border-b border-line bg-surface"
        >
          <div className="container-x flex items-center gap-4">
            <span className="eyebrow hidden text-muted md:inline">Viewing</span>
            <SpecialtyToggle compact idPrefix="sticky" onSelect={scrollToLaneStart} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Home page "Our Specialities": both specialities side by side with their key services.
 * "Explore …" switches the toggle and jumps to that lane.
 */
function Overview() {
  const { setSpecialty } = useSpecialty()
  const explore = (key) => {
    setSpecialty(key)
    requestAnimationFrame(() =>
      document.getElementById('specialty-content')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' }),
    )
  }
  const cols = [
    { key: 'neuro', data: neuroOverview, color: 'var(--brand-indigo)' },
    { key: 'womens', data: womensOverview, color: 'var(--brand-magenta)' },
  ]
  return (
    <div className="mt-12 grid gap-12 border-t border-line pt-10 md:grid-cols-2 md:gap-10 lg:mt-16 lg:gap-16 lg:pt-12">
      {cols.map(({ key, data, color }, i) => (
        <motion.article
          key={key}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
          className="flex flex-col"
        >
          <h3 className="text-h3 font-semibold" style={{ color }}>
            {data.title}
          </h3>
          <p className="mt-3 max-w-prose text-muted">{data.description}</p>
          <p className="eyebrow mt-6 mb-4 text-ink">{data.keyServicesTitle}</p>
          <TagList items={data.keyServices} />
          <button
            type="button"
            onClick={() => explore(key)}
            className="group mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold underline decoration-2 underline-offset-[6px] transition-colors"
            style={{ color, textDecorationColor: 'color-mix(in srgb, currentColor 30%, transparent)' }}
          >
            {data.cta}
            <ArrowDown aria-hidden="true" className="size-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.article>
      ))}
    </div>
  )
}

export default function Specialities() {
  const { specialty } = useSpecialty()
  const toggleRef = useRef(null)
  const intro = specialitiesIntro

  return (
    <section id="specialities" aria-labelledby="specialities-title" className="bg-bg pt-16 lg:pt-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <p className="eyebrow mb-4 flex items-center gap-3 text-accent">
              <span className="tabular-nums">{intro.number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
              <span>{intro.eyebrow}</span>
            </p>
            <h2 id="specialities-title" className="text-h2 font-semibold">
              {intro.title}
            </h2>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="space-y-4 text-muted lg:col-span-6 lg:col-start-7 lg:pt-10"
          >
            {intro.paragraphs.length ? (
              intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <Pending>"Two Specialities" intro paragraphs from clinic-content.md</Pending>
            )}
          </motion.div>
        </div>

        <Overview />

        <div ref={toggleRef} className="mt-12 lg:mt-16">
          <SpecialtyToggle idPrefix="main" />
        </div>
        <StickyToggle anchorRef={toggleRef} />
      </div>

      {/* Full width: lanes manage their own containers and bands */}
      <div
        id="specialty-content"
        role="tabpanel"
        aria-labelledby={`main-tab-${specialty}`}
        className="mt-12 lg:mt-16"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={specialty}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {specialty === 'neuro' ? <NeuroLane /> : <WomensLane />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
