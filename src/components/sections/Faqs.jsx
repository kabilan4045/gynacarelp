import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Accordion from '../ui/Accordion'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import Pending from '../ui/Pending'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { telLink, waLink } from '../../config/clinic'
import { useSpecialty } from '../../context/SpecialtyContext'
import { faqSection as fs, generalFaqs, waMessages } from '../../data/shared'
import * as neuro from '../../data/neuro'
import * as womens from '../../data/womens'

const LANE = {
  neuro: { faqs: neuro.faqs, label: 'Brain & Spine', expected: 3 },
  womens: { faqs: womens.faqs, label: "Women's Health & Fertility", expected: 1 },
}

export default function Faqs() {
  const { specialty } = useSpecialty()
  const lane = LANE[specialty]
  const items = [...generalFaqs, ...lane.faqs]

  return (
    <section id="faqs" aria-labelledby="faqs-title" className="section-y bg-accent-soft">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+var(--subnav-h)+40px)]">
            <p className="eyebrow mb-4 flex items-center gap-3 text-accent">
              <span className="tabular-nums">{fs.number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
              <span>{fs.eyebrow}</span>
            </p>
            <h2 id="faqs-title" className="text-h2 font-semibold">
              {fs.title}
            </h2>
            <p className="mt-6 text-lead text-muted">{fs.line}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button variant="primary" size="lg" href={telLink()}>
                <Phone aria-hidden="true" className="size-5" />
                Call
              </Button>
              <Button variant="whatsapp" size="lg" href={waLink(waMessages[specialty])}>
                <WhatsAppIcon />
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={specialty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-card bg-surface px-6 py-2 sm:px-8 lg:px-10 lg:py-4"
            >
              {items.length > 0 && <Accordion items={items} />}
              {generalFaqs.length === 0 && <Pending className="my-4">3 general FAQs (appointment, what to bring, second opinion) from clinic-content.md</Pending>}
              {lane.faqs.length === 0 && (
                <Pending className="my-4">
                  {lane.expected} {lane.label} FAQ{lane.expected > 1 ? 's' : ''} from clinic-content.md
                </Pending>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
