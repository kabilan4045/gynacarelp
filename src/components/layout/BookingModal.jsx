import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import LeadForm from '../ui/LeadForm'
import { useSpecialty } from '../../context/SpecialtyContext'
import { appointment } from '../../data/shared'
import { doctor as neuroDoctor } from '../../data/neuro'
import { doctor as womensDoctor } from '../../data/womens'

const f = appointment.form
const defaultDoctor = (specialty) => (specialty === 'womens' ? womensDoctor.name : neuroDoctor.name)

/**
 * The booking popup. Bottom sheet on phones, centred dialog from sm up.
 * Opened by goToBooking() from any "Book" button. Escape / backdrop / × close it;
 * focus stays inside while open and returns to the button that opened it.
 */
export default function BookingModal() {
  const { bookingOpen, closeBooking, bookingPrefill, specialty } = useSpecialty()
  const [doctor, setDoctor] = useState(defaultDoctor(specialty))
  const panelRef = useRef(null)
  const openerRef = useRef(null)

  // Fresh prefill each time it opens
  useEffect(() => {
    if (!bookingOpen) return
    setDoctor(bookingPrefill.doctor || defaultDoctor(specialty))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingOpen, bookingPrefill.nonce])

  useEffect(() => {
    if (!bookingOpen) return
    openerRef.current = document.activeElement
    const root = document.documentElement
    root.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') return closeBooking()
      if (e.key !== 'Tab' || !panelRef.current) return
      const items = [...panelRef.current.querySelectorAll('button, input, a[href]')].filter((el) => !el.disabled)
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      root.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      openerRef.current?.focus?.({ preventScroll: true })
    }
  }, [bookingOpen, closeBooking])

  const concern = bookingPrefill.doctor === doctor ? bookingPrefill.concern : ''
  const specialtyOfDoctor = doctor === womensDoctor.name ? 'womens' : 'neuro'

  return (
    <AnimatePresence>
      {bookingOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            aria-hidden="true"
            onClick={closeBooking}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-ink/50"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            data-specialty={specialtyOfDoctor}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-card bg-surface px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-lift sm:max-w-lg sm:rounded-card sm:p-8"
          >
            {/* grab handle on phones */}
            <span aria-hidden="true" className="mx-auto mb-4 block h-1 w-10 rounded-full bg-line sm:hidden" />
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="booking-modal-title" className="text-h3 font-semibold">
                  {f.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{f.intro}</p>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                aria-label={f.close}
                className="-mt-1 -mr-2 grid size-11 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <LeadForm key={bookingPrefill.nonce} doctor={doctor} concern={concern} onDoctorChange={setDoctor} autoFocus={window.matchMedia('(pointer: fine)').matches} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
