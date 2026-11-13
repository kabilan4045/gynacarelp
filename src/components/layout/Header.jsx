import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { clinic, telLink } from '../../config/clinic'
import { nav } from '../../data/shared'
import { useSpecialty } from '../../context/SpecialtyContext'

/**
 * Landing-page header. Desktop: logo, section links, phone, Book.
 * Below lg: logo + Book only — no menu. Call / WhatsApp / Book live in the mobile bottom bar.
 */
export default function Header() {
  const { goToBooking } = useSpecialty()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b transition-[background-color,border-color] duration-300 ${
        scrolled ? 'border-line bg-surface' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-full items-center justify-between gap-4">
        <Logo className="h-11 shrink-0 lg:h-12" />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:gap-6">
          <a
            href={telLink()}
            className="hidden items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-accent lg:inline-flex"
            aria-label={`Call ${clinic.name} on ${clinic.phoneDisplay}`}
          >
            <Phone aria-hidden="true" className="size-4 text-accent" />
            <span className="hidden xl:inline">{clinic.phoneDisplay}</span>
          </a>
          <Button variant="gradient" size="md" className="btn-nudge max-lg:hidden" onClick={() => goToBooking()}>
            Book Appointment
          </Button>
          {/* Mobile / tablet: no menu on the landing page, just the main action */}
          <Button variant="gradient" size="sm" className="btn-nudge lg:hidden" onClick={() => goToBooking()}>
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
