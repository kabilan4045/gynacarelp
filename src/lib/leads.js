// One place for appointment requests: validation, sending, and the thank-you redirect.
import { clinic, waLink } from '../config/clinic'

export const normalisePhone = (v) => v.replace(/[\s\-()]/g, '')
// 10-digit Indian mobile (starts 6–9), optional +91 / 91 / 0 prefix
export const PHONE_RE = /^(?:\+?91|0)?[6-9]\d{9}$/
export const tenDigits = (v) => normalisePhone(v).slice(-10)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const THANK_YOU_URL = '/thank-you.html'
const STORE_KEY = 'ng-lead'

/** Returns { field: message } for anything invalid. Name + phone required; email + city optional. */
export function validateLead(lead, messages) {
  const e = {}
  if (lead.name.trim().length < 2) e.name = messages.name
  if (!PHONE_RE.test(normalisePhone(lead.phone))) e.phone = messages.phone
  if (lead.email.trim() && !EMAIL_RE.test(lead.email.trim())) e.email = messages.email
  return e
}

export function leadMessage(lead) {
  return [
    `Hello ${clinic.name}, I would like to book a consultation.`,
    '',
    `Name: ${lead.name.trim()}`,
    `Phone: +91 ${tenDigits(lead.phone)}`,
    lead.email.trim() && `Email: ${lead.email.trim()}`,
    lead.city.trim() && `City: ${lead.city.trim()}`,
    lead.doctor && `Doctor: ${lead.doctor}`,
    lead.concern && `Concern: ${lead.concern}`,
  ]
    .filter((x) => x !== false && x !== '')
    .join('\n')
}

const remember = (lead) => {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(lead))
  } catch {
    /* private mode etc. — the thank-you page still works without it */
  }
}

export function readRememberedLead() {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || 'null')
  } catch {
    return null
  }
}

/**
 * Send the request, then go to the thank-you page.
 * - If clinic.leadEndpoint is set: POST JSON there (form service, Google Apps Script, CRM webhook…).
 * - Otherwise: open WhatsApp with the details pre-filled (must run inside the click handler).
 * Returns false if the endpoint failed, so the form can show an error.
 */
export async function submitLead(lead) {
  const payload = { ...lead, phone: `+91${tenDigits(lead.phone)}`, page: location.href, submittedAt: new Date().toISOString() }
  let via = 'whatsapp'

  if (clinic.leadEndpoint) {
    try {
      const res = await fetch(clinic.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      via = 'form'
    } catch {
      return false
    }
  } else {
    window.open(waLink(leadMessage(lead)), '_blank', 'noopener,noreferrer')
  }

  remember(lead)
  const first = lead.name.trim().split(/\s+/)[0]
  window.location.assign(`${THANK_YOU_URL}?via=${via}&name=${encodeURIComponent(first)}`)
  return true
}
