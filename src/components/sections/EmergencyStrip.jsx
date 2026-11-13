import { Phone, TriangleAlert } from 'lucide-react'
import { clinic, telLink } from '../../config/clinic'
import { emergency } from '../../data/shared'

export default function EmergencyStrip() {
  return (
    <aside aria-label={emergency.label} className="border-y border-emergency/15 bg-[#FFF3EC]">
      <div className="container-x flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-start gap-3 sm:items-center">
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-emergency sm:mt-0" />
          <p className="text-sm leading-snug text-[#4A1D0A]">
            <strong className="font-semibold text-emergency">{emergency.label}: </strong>
            {emergency.text}
          </p>
        </div>
        <a
          href={telLink()}
          aria-label={`${emergency.cta}: ${clinic.phoneDisplay}`}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-emergency px-6 text-sm font-semibold text-white transition-colors hover:bg-[#9A3412] focus-visible:outline-emergency sm:self-auto"
        >
          <Phone aria-hidden="true" className="size-4" />
          {emergency.cta}
        </a>
      </div>
    </aside>
  )
}
