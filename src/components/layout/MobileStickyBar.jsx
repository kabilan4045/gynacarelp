import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Phone } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { telLink, waLink } from '../../config/clinic'
import { useSpecialty } from '../../context/SpecialtyContext'
import { mobileBar, waMessages } from '../../data/shared'

/** Call | WhatsApp | Book — mobile only (< 768px), hidden while #booking is on screen. */
export default function MobileStickyBar() {
  const { specialty, goToBooking } = useSpecialty()
  const [bookingVisible, setBookingVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById('booking')
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting), { threshold: 0.05 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const item = 'flex h-14 flex-1 items-center justify-center gap-2 text-sm font-semibold'

  return (
    <AnimatePresence>
      {!bookingVisible && (
        <motion.nav
          aria-label="Quick contact"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
        >
          <div className="flex divide-x divide-line">
            <a href={telLink()} className={`${item} text-accent`}>
              <Phone aria-hidden="true" className="size-5" />
              {mobileBar.call}
            </a>
            <a href={waLink(waMessages[specialty])} target="_blank" rel="noopener noreferrer" className={`${item} bg-whatsapp text-[#0B2E17]`}>
              <WhatsAppIcon className="size-5" />
              {mobileBar.whatsapp}
            </a>
            <button type="button" onClick={() => goToBooking()} className={`${item} btn-nudge btn-nudge-late text-accent`}>
              <CalendarCheck aria-hidden="true" className="size-5" />
              {mobileBar.book}
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
