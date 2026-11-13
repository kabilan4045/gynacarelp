import { useEffect, useId, useRef, useState } from 'react'
import Button from './Button'
import { appointment } from '../../data/shared'
import { doctor as neuroDoctor } from '../../data/neuro'
import { doctor as womensDoctor } from '../../data/womens'
import { submitLead, validateLead } from '../../lib/leads'

const f = appointment.form
const DOCTORS = { neuro: neuroDoctor.name, womens: womensDoctor.name }
const specialtyOf = (name) => (name === DOCTORS.womens ? 'womens' : 'neuro')

const inputCls = (bad) =>
  `block h-12 w-full rounded-input border bg-surface px-4 text-base text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/25 ${
    bad ? 'border-[#B42318]' : 'border-line hover:border-accent/30'
  }`

/**
 * Short appointment form: name, phone, email (optional), city (optional).
 * The doctor comes from where the visitor clicked; they can switch with one tap.
 * On submit → submitLead() → thank-you page.
 */
export default function LeadForm({ doctor, concern = '', onDoctorChange, autoFocus = false }) {
  const uid = useId()
  const [lead, setLead] = useState({ name: '', phone: '', email: '', city: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const refs = { name: useRef(null), phone: useRef(null), email: useRef(null) }

  useEffect(() => {
    if (autoFocus) refs.name.current?.focus({ preventScroll: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const set = (k, v) => {
    setLead((cur) => ({ ...cur, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validateLead(lead, f.errors)
    setErrors(e)
    const first = ['name', 'phone', 'email'].find((k) => e[k])
    if (first) return refs[first].current?.focus()
    setSending(true)
    const ok = await submitLead({ ...lead, doctor, concern })
    if (!ok) {
      setSending(false)
      setErrors({ send: f.errors.send })
    }
  }

  const other = specialtyOf(doctor) === 'neuro' ? DOCTORS.womens : DOCTORS.neuro
  const field = (k, label, props = {}, optional = false) => (
    <div>
      <label htmlFor={`${uid}-${k}`} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {optional && <span className="font-normal text-muted">({f.optional})</span>}
      </label>
      <input
        ref={refs[k]}
        id={`${uid}-${k}`}
        value={lead[k]}
        onChange={(e) => set(k, e.target.value)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${uid}-${k}-err` : undefined}
        className={inputCls(errors[k])}
        {...props}
      />
      {errors[k] && (
        <p id={`${uid}-${k}-err`} className="mt-1.5 text-sm font-medium text-[#B42318]">
          {errors[k]}
        </p>
      )}
    </div>
  )

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-4">
      <p className="flex flex-wrap items-baseline gap-x-2 rounded-input bg-accent-soft px-4 py-3 text-sm text-ink">
        <span className="text-muted">{f.withDoctor}</span>
        <strong className="font-semibold text-accent-strong">{doctor}</strong>
        {concern && <span className="text-muted">· {concern}</span>}
        {onDoctorChange && (
          <button
            type="button"
            onClick={() => onDoctorChange(other)}
            className="-my-3 ml-auto inline-flex min-h-11 items-center font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {f.switchTo} {other}
          </button>
        )}
      </p>

      {field('name', f.name, { type: 'text', autoComplete: 'name' })}
      {field('phone', f.phone, { type: 'tel', inputMode: 'tel', autoComplete: 'tel', placeholder: '98765 43210' })}
      <div className="grid gap-4 sm:grid-cols-2">
        {field('email', f.email, { type: 'email', inputMode: 'email', autoComplete: 'email' }, true)}
        {field('city', f.city, { type: 'text', autoComplete: 'address-level2' }, true)}
      </div>

      {errors.send && <p className="rounded-input bg-[#FEF3F2] px-4 py-3 text-sm font-medium text-[#B42318]">{errors.send}</p>}

      <div className="pt-1">
        <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={sending}>
          {sending ? f.sending : f.submit}
        </Button>
        <p className="mt-3 text-center text-sm text-muted">{f.note}</p>
      </div>
    </form>
  )
}
