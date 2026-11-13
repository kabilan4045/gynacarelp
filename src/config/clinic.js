// Every contact detail on the page comes from this file.
// Replace the TODO placeholders with real details before going live.

export const clinic = {
  name: 'NeuGynesis',
  logo: '/logo.png',
  logoMark: '/logo-mark.png',

  // Footer text from clinic-content.md
  tagline: 'Specialised care in Neurosurgery, Neurointervention, Spine Care, Gynaecology, Obstetrics, Fertility & Reproductive Medicine.',

  // TODO: real phone number in E.164 format (used in tel: links)
  phone: '+910000000000',
  // TODO: phone number as it should appear on the page
  phoneDisplay: '[Phone Number]',
  // TODO: WhatsApp number, country code + number, digits only
  whatsapp: '910000000000',
  // TODO: real email address
  email: '[Email Address]',
  // TODO: full clinic address
  address: '[Complete Clinic Address]',
  // TODO: consultation days and timings
  timings: '[Days & Timings]',
  // TODO: Google Maps link for the clinic
  mapsUrl: '#',

  // TODO: where appointment requests are sent (form service / Google Apps Script / CRM webhook URL).
  // Empty = requests open WhatsApp with the details pre-filled instead.
  leadEndpoint: '',

  year: new Date().getFullYear(),
}

export const telLink = () => `tel:${clinic.phone}`

/** WhatsApp link with a pre-filled, context-specific message. */
export const waLink = (message = `Hello ${clinic.name}, I would like to book a consultation.`) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`

export const mailLink = () => `mailto:${clinic.email}`
