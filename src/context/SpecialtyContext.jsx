import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const SpecialtyContext = createContext(null)

// Hash in the URL  <->  specialty key
const HASH_TO_SPECIALTY = { '#neuro': 'neuro', '#fertility': 'womens' }
const SPECIALTY_TO_HASH = { neuro: '#neuro', womens: '#fertility' }

const specialtyFromHash = () =>
  typeof window === 'undefined' ? null : HASH_TO_SPECIALTY[window.location.hash.toLowerCase()] ?? null

export function SpecialtyProvider({ children }) {
  const [specialty, setSpecialtyState] = useState(() => specialtyFromHash() ?? 'neuro')
  const [bookingPrefill, setBookingPrefill] = useState({ doctor: '', concern: '' })

  // Reflect on <html data-specialty="...">
  useEffect(() => {
    document.documentElement.dataset.specialty = specialty
  }, [specialty])

  // Back/forward or a pasted #neuro / #fertility link. Other hashes (#booking etc.) are ignored.
  useEffect(() => {
    const onHashChange = () => {
      const next = specialtyFromHash()
      if (next) setSpecialtyState(next)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Update the hash without making the page jump.
  const setSpecialty = useCallback((next) => {
    if (next !== 'neuro' && next !== 'womens') return
    setSpecialtyState(next)
    const hash = SPECIALTY_TO_HASH[next]
    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`)
    }
  }, [])

  // Every "Book" button calls this: it opens the short booking popup, pre-filled with
  // the doctor / concern the visitor clicked from (empty = follow the active speciality).
  const [bookingOpen, setBookingOpen] = useState(false)
  const goToBooking = useCallback((doctor = '', concern = '') => {
    setBookingPrefill({ doctor, concern, nonce: Date.now() })
    setBookingOpen(true)
  }, [])
  const closeBooking = useCallback(() => setBookingOpen(false), [])

  const value = useMemo(
    () => ({ specialty, setSpecialty, bookingPrefill, goToBooking, bookingOpen, closeBooking }),
    [specialty, setSpecialty, bookingPrefill, goToBooking, bookingOpen, closeBooking],
  )

  return <SpecialtyContext.Provider value={value}>{children}</SpecialtyContext.Provider>
}

export function useSpecialty() {
  const ctx = useContext(SpecialtyContext)
  if (!ctx) throw new Error('useSpecialty must be used inside <SpecialtyProvider>')
  return ctx
}
