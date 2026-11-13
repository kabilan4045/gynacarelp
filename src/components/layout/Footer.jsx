import { Mail, MapPin, Phone } from 'lucide-react'
import { clinic, mailLink, telLink } from '../../config/clinic'
import { footer as ft } from '../../data/shared'

/**
 * Simple centred footer, same on desktop and mobile:
 * logo, tagline, address, phone, email, copyright.
 */
export default function Footer() {
  return (
    <footer className="relative bg-band text-white/80">
      <div className="rule-gradient absolute inset-x-0 top-0 h-[3px]" aria-hidden="true" />
      <div className="container-x flex flex-col items-center py-12 text-center md:py-16">
        <a href="#top" className="inline-flex rounded-input bg-white px-5 py-3" aria-label={`${clinic.name}, back to top`}>
          <img src={clinic.logo} alt={clinic.name} loading="lazy" decoding="async" className="h-12 w-auto" width="860" height="310" />
        </a>

        <p className="mt-5 max-w-xl text-sm text-white/70">{clinic.tagline}</p>

        <address className="mt-8 flex max-w-3xl items-start justify-center gap-3 text-sm not-italic text-white/85 md:text-base">
          <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white/60 md:mt-1" />
          <span>{clinic.address}</span>
        </address>

        <a
          href={telLink()}
          className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-white transition-colors hover:text-white/75 md:text-base"
        >
          <Phone aria-hidden="true" className="size-4 text-white/60" />
          {clinic.phoneDisplay}
        </a>

        <a
          href={mailLink()}
          className="inline-flex min-h-11 items-center gap-3 break-all text-sm font-medium text-white transition-colors hover:text-white/75 md:text-base"
        >
          <Mail aria-hidden="true" className="size-4 shrink-0 text-white/60" />
          {clinic.email}
        </a>

        <p className="mt-8 w-full border-t border-white/10 pt-6 text-sm text-white/60">{ft.copyright(clinic.year, clinic.name)}</p>
      </div>
    </footer>
  )
}
