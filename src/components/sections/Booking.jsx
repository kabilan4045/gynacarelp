import { useEffect, useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import LeadForm from '../ui/LeadForm'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { clinic, mailLink, telLink, waLink } from '../../config/clinic'
import { useSpecialty } from '../../context/SpecialtyContext'
import { appointment as ap, waMessages } from '../../data/shared'
import { doctor as neuroDoctor } from '../../data/neuro'
import { doctor as womensDoctor } from '../../data/womens'

const defaultDoctor = (specialty) => (specialty === 'womens' ? womensDoctor.name : neuroDoctor.name)

/* ------------------------------------------------------------------ */
/* Direct contact card                                                 */
/* ------------------------------------------------------------------ */

function DirectContact({ specialty }) {
  const d = ap.direct
  const rows = [
    { icon: Mail, label: d.email, value: clinic.email, href: mailLink() },
    { icon: MapPin, label: d.address, value: clinic.address },
    { icon: Clock, label: d.timings, value: clinic.timings },
  ]
  return (
    <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <h3 className="text-h4 font-semibold">{d.title}</h3>
      <div className="mt-6 grid gap-3">
        <Button variant="primary" size="lg" href={telLink()} className="h-16 justify-start px-6">
          <Phone aria-hidden="true" className="size-5" />
          {d.call} {clinic.phoneDisplay}
        </Button>
        <Button variant="whatsapp" size="lg" href={waLink(waMessages[specialty])} className="h-16 justify-start px-6">
          <WhatsAppIcon className="size-6" />
          {d.whatsapp}
        </Button>
      </div>
      <dl className="mt-8 border-t border-line">
        {rows.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="border-b border-line py-4">
            <dt className="eyebrow flex items-center gap-3 text-muted">
              <Icon aria-hidden="true" className="size-4 shrink-0 text-accent" />
              {label}
            </dt>
            <dd className="mt-1 break-words pl-7 text-ink">
              {href ? (
                <a href={href} className="inline-flex min-h-11 items-center hover:text-accent">
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <Button variant="secondary" size="md" href={clinic.mapsUrl} external={clinic.mapsUrl !== '#'} className="mt-6">
        {d.directions}
      </Button>
    </div>
  )
}

/* ------------------------------------------------------------------ */

export default function Booking() {
  const { specialty } = useSpecialty()
  const [doctor, setDoctor] = useState(defaultDoctor(specialty))
  // follow the page toggle
  useEffect(() => setDoctor(defaultDoctor(specialty)), [specialty])
  const formSpecialty = doctor === womensDoctor.name ? 'womens' : 'neuro'

  return (
    <section id="booking" aria-labelledby="booking-title" className="relative overflow-hidden bg-bg">
      {/* The one large gradient on the page: a very soft wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{ background: 'linear-gradient(125deg, var(--brand-indigo) 0%, var(--brand-plum) 50%, var(--brand-magenta) 100%)' }}
      />
      <div className="container-x section-y relative">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 flex items-center gap-3 text-accent">
              <span className="tabular-nums">06</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
              <span>{ap.eyebrow}</span>
            </p>
            <h2 id="booking-title" className="text-h2 font-semibold">
              {ap.title}
            </h2>
          </div>
          <div className="text-lead text-muted lg:col-span-5 lg:pt-10">
            <p>{ap.paragraph}</p>
          </div>
        </Reveal>

        <div data-specialty={formSpecialty} className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:items-start lg:gap-8">
          <Reveal className="rounded-card border border-line bg-surface p-6 shadow-lift sm:p-8 lg:col-span-7 lg:p-10">
            <h3 className="text-h3 font-semibold">{ap.form.title}</h3>
            <p className="mt-1 mb-6 text-sm text-muted">{ap.form.intro}</p>
            <LeadForm doctor={doctor} onDoctorChange={setDoctor} />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <DirectContact specialty={formSpecialty} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
