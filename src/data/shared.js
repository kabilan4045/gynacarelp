// Copy for shared sections — from clinic-content.md ("[Clinic Name]" replaced with NeuGynesis).
// UI microcopy (form labels, button hints) is written for the page.

import { clinic } from '../config/clinic'

export const nav = [
  { label: 'Specialities', href: '#specialities' },
  { label: 'Doctors', href: '#doctor' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export const waMessages = {
  general: `Hello ${clinic.name}, I would like to book a consultation.`,
  hero: `Hello ${clinic.name}, I visited your website and would like to book a consultation.`,
  neuro: `Hello ${clinic.name}, I would like to book a consultation with Dr. Dinesh Verma (Brain & Spine).`,
  womens: `Hello ${clinic.name}, I would like to book a consultation with Dr. Shobhna (Women's Health & Fertility).`,
}

export const hero = {
  // Shortened from "Specialised Neuro & Gynae Care, Focused on You" so it fits one line at 390px
  eyebrow: 'Specialised Neuro & Gynae Care',
  // H1: "Advanced Care for Brain, Spine, Women's Health & Fertility"
  title: {
    lead: 'Advanced Care for ',
    neuro: 'Brain, Spine',
    joiner: ', ',
    womens: "Women's Health & Fertility",
  },
  subtitle:
    'Expert consultation and advanced treatment for neurological, spine, fertility, gynaecological and pregnancy-related conditions—all with a personalised, patient-centred approach.',
  primaryCta: 'Book an Appointment',
  whatsappCta: 'WhatsApp Us',
  exploreCta: 'Explore Our Specialities',
  cardsLabel: 'Choose your care',
}

export const emergency = {
  label: 'Stroke treatment is time-sensitive',
  // From the Stroke Care warning paragraph
  text: 'Sudden weakness, facial drooping, difficulty speaking or severe imbalance? Seek emergency medical attention immediately.',
  cta: 'Call Now',
}

export const trust = [
  { count: 2000, suffix: '+', label: 'Neurosurgical procedures performed independently', specialty: 'neuro' },
  { count: 10, suffix: '+ years', label: 'Clinical experience in reproductive medicine', specialty: 'womens' },
  { value: 'M.Ch Neurosurgery', label: 'JIPMER, Puducherry', specialty: 'neuro' },
  { value: 'FNB Reproductive Medicine', label: 'Madras Medical Mission, Chennai', specialty: 'womens' },
]

export const specialitiesIntro = {
  number: '01',
  eyebrow: 'Our Specialities',
  title: 'Two Specialities. One Commitment to Better Care.',
  paragraphs: [
    'At NeuGynesis, we bring together specialised care in Neurosurgery & Neurointervention and Obstetrics, Gynaecology & Reproductive Medicine.',
    'Our approach combines clinical expertise, modern medical techniques and individualised treatment planning. Whether you are seeking treatment for a brain or spine condition, fertility support, pregnancy care or a gynaecological concern, our focus remains on providing clear guidance and appropriate care at every stage.',
  ],
}

export const specialtyToggle = {
  neuro: 'Brain & Spine',
  womens: "Women's Health & Fertility",
  label: 'Choose a speciality',
}

export const doctorSection = {
  number: '02',
  eyebrow: 'Meet Your Specialist',
  areasTitle: 'Areas of Special Interest',
  qualificationsTitle: 'Qualifications',
  researchTitle: 'Research & Publications',
  bookCta: (name) => `Book Consultation with ${name}`,
  // "Looking for Women's Health & Fertility? Meet Dr. Shobhna →"
  switchLine: (specialtyLabel, name) => [`Looking for ${specialtyLabel}?`, `Meet ${name}`],
}

export const whyChooseUs = {
  number: '03',
  eyebrow: 'Why Choose Us',
  title: 'Specialised Care Under One Roof',
  intro: [
    'Our clinic brings together two advanced medical specialities with a common philosophy—care that is personalised, evidence-based and centred around the patient.',
  ],
  items: [
    { title: 'Experienced Specialists', text: ['Care from specialists with extensive clinical, surgical and academic experience.'] },
    { title: 'Personalised Treatment', text: ['Every patient is evaluated individually before a treatment plan is recommended.'] },
    { title: 'Advanced Techniques', text: ['Access to contemporary surgical, minimally invasive and interventional treatment approaches.'] },
    { title: 'Clear Communication', text: ['We believe patients should understand their diagnosis, available treatment options and expected care pathway.'] },
    { title: 'Comprehensive Care', text: ['From diagnosis and counselling to procedures, surgery and follow-up care.'] },
  ],
}

export const approach = {
  number: '04',
  eyebrow: 'Our Approach',
  statement: 'Listen. Evaluate. Explain. Treat.',
  intro: [],
  steps: [
    { title: 'Consultation', text: ['We begin by understanding your symptoms, medical history and concerns.'] },
    { title: 'Evaluation', text: ['Relevant clinical examination, investigations and imaging are reviewed.'] },
    { title: 'Treatment Planning', text: ['Available treatment options are discussed clearly, including potential benefits, limitations and alternatives where appropriate.'] },
    { title: 'Treatment & Follow-Up', text: ['Care is coordinated through treatment, procedures, surgery and follow-up as clinically required.'] },
  ],
}

export const faqSection = {
  number: '05',
  eyebrow: 'FAQs',
  title: 'Frequently Asked Questions',
  line: 'Still have questions? Call or WhatsApp us',
}

export const generalFaqs = [
  {
    q: 'Do I need an appointment?',
    a: 'Appointments are recommended to minimise waiting time and ensure adequate consultation time.',
  },
  {
    q: 'What should I bring for my first consultation?',
    a: 'Please carry previous prescriptions, investigation reports, scans, discharge summaries and a list of medications you are currently taking.',
  },
  {
    q: 'Can I get a second opinion?',
    a: 'Yes. Patients seeking a second opinion can bring their previous reports and imaging for evaluation.',
  },
]

export const appointment = {
  eyebrow: 'Book an Appointment',
  title: 'Your Health Deserves Specialist Attention',
  paragraph:
    'Whether you need neurological, spine, fertility, pregnancy or gynaecological care, our specialists are here to help you understand your condition and available treatment options.',
  form: {
    title: 'Book a Consultation',
    intro: 'Our team will assist you with appointment availability.',
    name: 'Full name',
    phone: 'Mobile number',
    email: 'Email',
    city: 'City',
    optional: 'optional',
    withDoctor: 'Consultation with',
    switchTo: 'Switch to',
    submit: 'Book Appointment',
    sending: 'Sending…',
    note: "We'll confirm your appointment availability.",
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a valid 10-digit mobile number.',
      email: 'Please check your email address.',
      send: 'Something went wrong. Please call or WhatsApp us instead.',
    },
    close: 'Close',
  },
  thankYou: {
    formTitle: (name) => (name ? `Thank you, ${name}.` : 'Thank you.'),
    formText: 'We’ve received your request. Our team will contact you shortly to confirm your appointment availability.',
    waTitle: (name) => (name ? `Almost done, ${name}.` : 'Almost done.'),
    waText: 'Your details are ready in WhatsApp. Please press Send there so we receive your request. Our team will then contact you to confirm your appointment availability.',
    waRetry: 'Open WhatsApp again',
    bringTitle: 'What should I bring for my first consultation?',
    // From the FAQ in clinic-content.md
    bringText:
      'Please carry previous prescriptions, investigation reports, scans, discharge summaries and a list of medications you are currently taking.',
    home: 'Back to home',
  },
  direct: {
    title: 'Prefer to talk to us directly?',
    call: 'Call',
    whatsapp: 'WhatsApp us',
    email: 'Email',
    address: 'Address',
    timings: 'Consultation timings',
    directions: 'Get Directions',
  },
}

export const contact = {
  title: 'Get in Touch',
  text: [
    'Have a question or want to schedule a consultation?',
    'Our team will assist you with appointment availability and clinic information.',
  ],
  call: 'Call Now',
  whatsapp: 'WhatsApp Us',
  directions: 'Get Directions',
  book: 'Book Appointment',
}

export const footer = {
  quickLinksTitle: 'Quick links',
  contactTitle: 'Contact',
  // `specialty` switches the toggle before scrolling
  links: [
    { label: 'Home', href: '#top' },
    { label: 'About Us', href: '#why-us' },
    { label: 'Neurosciences', href: '#specialities', specialty: 'neuro' },
    { label: "Women's Health", href: '#specialities', specialty: 'womens' },
    { label: 'Fertility & IVF', href: '#specialities', specialty: 'womens' },
    { label: 'Our Doctors', href: '#doctor' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Book Appointment', href: '#booking', book: true },
  ],
  disclaimerTitle: 'Important Information',
  disclaimer: [
    'The information provided on this website is intended for general educational purposes and should not be considered a substitute for individual medical consultation, diagnosis or treatment.',
  ],
  emergencyNote:
    'For medical emergencies, please visit the nearest emergency department or contact your local emergency medical service.',
  copyright: (year, name) => `© ${year} ${name}. All Rights Reserved.`,
}

export const mobileBar = { call: 'Call', whatsapp: 'WhatsApp', book: 'Book' }
