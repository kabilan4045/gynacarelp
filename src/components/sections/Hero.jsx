import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import DoctorPhoto from '../ui/DoctorPhoto'
import Pending from '../ui/Pending'
import { NeuralPattern, LeafCurves } from '../ui/Motifs'
import { waLink } from '../../config/clinic'
import { hero, waMessages } from '../../data/shared'
import { doctor as neuroDoctor } from '../../data/neuro'
import { doctor as womensDoctor } from '../../data/womens'
import { useSpecialty } from '../../context/SpecialtyContext'

const CARDS = [
  { key: 'neuro', doctor: neuroDoctor, color: 'var(--brand-indigo)', soft: '#ECEBF7', softHover: '#E1DFF3', offset: 'lg:mr-10' },
  { key: 'womens', doctor: womensDoctor, color: 'var(--brand-magenta)', soft: '#FBE9F0', softHover: '#F7DCE7', offset: 'lg:ml-10' },
]

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const scrollToSpecialities = () => {
  const el = document.getElementById('specialities')
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // Offset by the header only: the sticky toggle isn't showing yet at this point.
  const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH, behavior: reduce ? 'auto' : 'smooth' })
}

function CareCard({ card, index }) {
  const { setSpecialty } = useSpecialty()
  const { doctor } = card

  return (
    <motion.button
      type="button"
      data-care-card={card.key}
      {...rise(0.25 + index * 0.1)}
      onClick={() => {
        setSpecialty(card.key)
        scrollToSpecialities()
      }}
      style={{ '--card-soft': card.soft, '--card-soft-hover': card.softHover }}
      className={`group flex w-full flex-col overflow-hidden rounded-card border border-line bg-surface text-left shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lift ${card.offset}`}
    >
      {/* Who */}
      <span className="grid grid-cols-[64px_1fr] items-center gap-4 p-4 sm:grid-cols-[76px_1fr] sm:gap-6 sm:p-6">
        <DoctorPhoto doctor={doctor.id} size="sm" tint={card.color} priority decorative />
        <span className="min-w-0">
          <span className="eyebrow block" style={{ color: card.color }}>
            {doctor.specialtyLabel}
          </span>
          <span className="mt-1.5 block font-heading text-h4 font-semibold text-ink">{doctor.name}</span>
          <span className="mt-0.5 block text-sm text-muted">{doctor.title}</span>
        </span>
      </span>
      {/* What: a soft tinted footer carries the specialty colour instead of a stripe */}
      <span className="flex items-center justify-between gap-3 bg-[var(--card-soft)] px-4 py-3 transition-colors duration-300 group-hover:bg-[var(--card-soft-hover)] sm:px-6">
        <span className="text-sm font-medium" style={{ color: card.color }}>
          {doctor.keyServices.join(' · ')}
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: card.color }}
        />
      </span>
      <span className="sr-only">: view {doctor.specialtyLabel}</span>
    </motion.button>
  )
}

export default function Hero() {
  const { goToBooking } = useSpecialty()

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-bg pt-[calc(var(--header-h)+40px)] pb-16 lg:pt-[calc(var(--header-h)+72px)] lg:pb-24"
    >
      {/* Faint motifs: neural on the text side, leaves behind the cards */}
      <NeuralPattern className="absolute -left-10 top-16 w-56 sm:w-72 lg:-left-4 lg:top-24 lg:w-80" opacity={0.14} />
      <LeafCurves className="absolute -right-16 bottom-0 w-72 sm:w-96 lg:-right-10 lg:w-[460px]" opacity={0.16} />

      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        {/* Left: 7/12 */}
        <div className="lg:col-span-7 lg:pr-8">
          <motion.p {...rise(0)} className="eyebrow flex items-center gap-3 text-muted">
            <span aria-hidden="true" className="rule-gradient w-8" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1 id="hero-title" {...rise(0.06)} className="mt-6 text-display font-medium">
            {hero.title.lead}
            <span className="text-indigo">{hero.title.neuro}</span>
            {hero.title.joiner}
            <span className="text-magenta">{hero.title.womens}</span>
          </motion.h1>

          <motion.div {...rise(0.12)} className="mt-6 max-w-[34rem]">
            {hero.subtitle ? (
              <p className="text-lead text-muted">{hero.subtitle}</p>
            ) : (
              <Pending>Hero subtext paragraph from clinic-content.md</Pending>
            )}
          </motion.div>

          <motion.div {...rise(0.18)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="gradient" size="lg" onClick={() => goToBooking()}>
              {hero.primaryCta}
            </Button>
            <Button variant="whatsappOutline" size="lg" href={waLink(waMessages.hero)}>
              <WhatsAppIcon />
              {hero.whatsappCta}
            </Button>
          </motion.div>

          <motion.a
            {...rise(0.22)}
            href="#specialities"
            className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent/40"
          >
            {hero.exploreCta}
            <ArrowDown aria-hidden="true" className="size-4 transition-transform group-hover:translate-y-0.5" />
          </motion.a>
        </div>

        {/* Right: 5/12 */}
        <div className="lg:col-span-5">
          <motion.p {...rise(0.2)} className="eyebrow mb-4 text-muted">
            {hero.cardsLabel}
          </motion.p>
          <div className="space-y-4">
            {CARDS.map((card, i) => (
              <CareCard key={card.key} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
