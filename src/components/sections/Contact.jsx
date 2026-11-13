import { Phone } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import Pending from '../ui/Pending'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { clinic, telLink, waLink } from '../../config/clinic'
import { useSpecialty } from '../../context/SpecialtyContext'
import { contact as c, waMessages } from '../../data/shared'

/** Compact horizontal band: deliberately lighter than the booking block above. */
export default function Contact() {
  const { goToBooking } = useSpecialty()
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface">
      <div className="container-x py-12 lg:py-16">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="contact-title" className="text-h3 font-semibold">
              {c.title}
            </h2>
            <div className="mt-3 text-muted">
              {c.text.length ? c.text.map((t, i) => <p key={i}>{t}</p>) : <Pending>Contact text</Pending>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:col-span-8 lg:justify-end">
            <Button variant="primary" href={telLink()} className="max-sm:px-3">
              <Phone aria-hidden="true" className="size-4" />
              {c.call}
            </Button>
            <Button variant="whatsapp" href={waLink(waMessages.general)} className="max-sm:px-3">
              <WhatsAppIcon className="size-4" />
              {c.whatsapp}
            </Button>
            <Button variant="secondary" href={clinic.mapsUrl} external={clinic.mapsUrl !== '#'} className="max-sm:px-3">
              {c.directions}
            </Button>
            <Button variant="gradient" onClick={() => goToBooking()} className="max-sm:px-3">
              {c.book}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
