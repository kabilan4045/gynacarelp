// Brain & Spine content — verbatim from clinic-content.md ("NEUROSCIENCES PAGE",
// "DR. DINESH VERMA – …", home page specialist + speciality blocks, neuro FAQs).

export const doctor = {
  id: 'dinesh',
  name: 'Dr. Dinesh Verma',
  title: 'Consultant Neurosurgeon & Neurointervention Specialist',
  specialtyLabel: 'Brain & Spine',
  // Short line for the hero card (from the Key Services list)
  keyServices: ['Brain', 'Spine', 'Stroke'],
  bio: [
    'Dr. Dinesh Verma is a Consultant in Neurosurgery and Neurointervention with advanced training in the diagnosis and management of complex brain, spine and neurovascular conditions.',
    'He has independently performed more than 2,000 neurosurgical procedures and has extensive experience in conventional, minimally invasive and endovascular neurological treatments.',
    'His clinical interests include stroke intervention, brain aneurysm treatment, vascular neurosurgery, minimally invasive spine surgery, neuro-oncology, skull base surgery, pediatric neurosurgery, epilepsy surgery and functional neurosurgery.',
    'Dr. Verma focuses on selecting the most appropriate treatment strategy for each patient, including surgical, minimally invasive, endovascular and non-surgical approaches where applicable.',
  ],
  areasOfInterest: [
    'Endovascular Neurosurgery',
    'Stroke Intervention',
    'Brain Aneurysm Treatment',
    'Minimally Invasive Spine Surgery',
    'Brain & Spine Tumours',
    'Vascular Neurosurgery',
    'Skull Base Surgery',
    'Pediatric Neurosurgery',
    'Epilepsy Surgery',
    'Neuro Trauma',
  ],
  qualificationsIntro: '',
  qualifications: [
    { degree: 'M.Ch. – Neurosurgery', institution: 'Jawaharlal Institute of Postgraduate Medical Education & Research — JIPMER, Puducherry' },
    { degree: 'DNB – General Surgery', institution: 'National Board of Examinations in Medical Sciences', note: 'Training at Fortis Hospital, Mohali' },
    { degree: 'MBBS', institution: 'Maharaja Agrasen Medical College, Agroha, Haryana' },
  ],
  experience: {
    title: 'Clinical Experience',
    text: [
      'Dr. Dinesh Verma has independently performed more than 2,000 neurosurgical procedures across a broad spectrum of brain, spine, vascular and neurological conditions.',
      'His training and clinical practice encompass:',
    ],
    areas: [
      'Neurosurgery',
      'Neurointervention',
      'Minimally Invasive Spine Surgery',
      'Vascular Neurosurgery',
      'Neuro-Oncology',
      'Neuro Trauma',
      'Skull Base Surgery',
      'Pediatric Neurosurgery',
      'Functional Neurosurgery',
    ],
  },
}

// Home page "Our Specialities" block
export const overview = {
  title: 'Neurosurgery & Neurointervention',
  description: 'Comprehensive evaluation and treatment for conditions affecting the brain, spine, nerves and blood vessels of the brain.',
  keyServicesTitle: 'Key Services',
  keyServices: [
    'Brain & Spine Surgery',
    'Neurointervention',
    'Stroke Intervention',
    'Brain Aneurysm Treatment',
    'Minimally Invasive Spine Surgery',
    'Endoscopic Spine Surgery',
    'Brain & Spine Tumour Surgery',
    'Vascular Neurosurgery',
    'Skull Base Surgery',
    'Pediatric Neurosurgery',
    'Epilepsy Surgery',
    'Functional Neurosurgery',
    'Neuro Trauma Care',
  ],
  cta: 'Explore Neuro Care',
}

export const lane = {
  eyebrow: 'Brain & Spine',
  title: 'Advanced Brain, Spine & Neurovascular Care',
  paragraphs: [
    'Neurological and spinal disorders can range from common conditions such as back pain and slipped discs to complex brain aneurysms, strokes and tumours.',
    "Dr. Dinesh Verma provides comprehensive evaluation and treatment using conventional neurosurgery, minimally invasive surgery and neurointerventional techniques depending on the patient's condition.",
  ],
}

// "What brings you here?" quick-select. Also feeds the booking dropdown.
export const concernsTitle = 'What brings you here?'
export const concerns = [
  'Back Pain',
  'Neck Pain',
  'Slipped Disc',
  'Sciatica',
  'Spinal Stenosis',
  'Nerve Compression',
  'Stroke',
  'Brain Aneurysm',
]

// Pull-quote, from the "Is every spine problem treated with surgery?" FAQ
export const reassurance = {
  question: 'Is every spine problem treated with surgery?',
  answerLead: 'No.',
  answer: [
    'Many spine conditions can initially be managed using non-surgical approaches. Surgery is considered when clinically appropriate based on symptoms, neurological findings and imaging.',
  ],
  cta: 'Talk to Dr. Verma about your options',
}

export const treatmentsTitle = 'Treatment Areas'

export const neurointervention = {
  title: 'Neurointervention',
  subtitle: 'Minimally Invasive Treatment Through Blood Vessels',
  description: [
    'Neurointervention uses catheter-based techniques to diagnose and treat selected conditions affecting blood vessels of the brain and spine.',
  ],
  servicesTitle: 'Services Include',
  services: [
    'Diagnostic Cerebral Angiography',
    'Spinal Angiography',
    'Brain Aneurysm Coiling',
    'Flow Diverter Placement',
    'Mechanical Thrombectomy for Acute Stroke',
    'Internal Carotid Artery Stenting',
    'AVM Embolization',
    'Tumour Embolization',
  ],
}

export const stroke = {
  title: 'Stroke Care',
  subtitle: 'Rapid Evaluation & Advanced Stroke Intervention',
  paragraphs: [
    'Certain types of acute stroke caused by blockage of a major brain artery may require urgent intervention.',
    'Where medically indicated, mechanical thrombectomy can be used to remove a blood clot through a catheter-based procedure.',
  ],
  warning:
    'Stroke treatment is time-sensitive. Patients experiencing sudden weakness, facial drooping, difficulty speaking, severe imbalance or other acute neurological symptoms should seek emergency medical attention immediately.',
  cta: 'Call Now',
}

export const aneurysm = {
  title: 'Brain Aneurysm Treatment',
  text: [
    'Brain aneurysms may require monitoring, endovascular treatment or surgery depending on their location, size, morphology and clinical presentation.',
    'Treatment options may include:',
  ],
  options: ['Endovascular Coiling', 'Flow Diversion', 'Surgical Clipping'],
  closing: 'The appropriate treatment is determined after detailed neurological and vascular assessment.',
}

export const spine = {
  title: 'Minimally Invasive Spine Surgery',
  subtitle: 'Advanced Spine Care with a Focus on Function & Recovery',
  intro: [
    'Dr. Dinesh Verma provides surgical and non-surgical management for conditions affecting different regions of the spine—from the craniovertebral junction to the sacral spine.',
  ],
  conditionsTitle: 'Conditions evaluated include',
  conditions: [
    'Back Pain',
    'Neck Pain',
    'Slipped Disc',
    'Sciatica',
    'Spinal Stenosis',
    'Spinal Instability',
    'Nerve Compression',
    'Spinal Trauma',
    'Degenerative Spine Conditions',
  ],
  proceduresTitle: 'Advanced Spine Procedures',
  procedures: [
    'Minimally Invasive Spine Surgery',
    'Endoscopic Spine Surgery',
    'Spinal Fixation',
    'Anterior Fusion Surgery',
    'Posterior Fusion Surgery',
    'Posterolateral Fusion',
    'Complex / Global Fusion Procedures',
  ],
}

export const vascular = {
  title: 'Vascular Neurosurgery',
  intro: ['Specialised management for complex blood vessel disorders of the brain, including:'],
  items: [
    'Brain Aneurysms',
    'Arteriovenous Malformations',
    'Cavernous Malformations',
    'Cerebral Venous / Sinus Thrombosis',
    'Moyamoya Disease',
    'Carotid Occlusive Disease',
  ],
  closing: 'Depending on the condition, treatment may involve microsurgery, endovascular intervention or a combination of approaches.',
}

export const oncology = {
  title: 'Neuro-Oncology',
  intro: ['Evaluation and surgical management of tumours affecting the:'],
  items: ['Brain', 'Spine', 'Spinal Cord', 'Nervous System'],
  closing: 'Treatment planning is based on tumour type, location, neurological function and multidisciplinary evaluation where required.',
}

// Compact accordion. `text` = paragraphs, `items` = optional list.
export const moreAreasTitle = 'More areas of neurosurgery'
export const moreAreas = [
  {
    title: 'Skull Base Surgery',
    text: ['Specialised surgical management of selected tumours and abnormalities located around complex structures at the base of the skull.'],
  },
  {
    title: 'Pediatric Neurosurgery',
    text: ['Evaluation and surgical care for selected neurological and neurosurgical conditions affecting infants, children and adolescents.'],
  },
  {
    title: 'Epilepsy Surgery',
    text: ['Selected patients with epilepsy that remains uncontrolled despite appropriate medical treatment may benefit from detailed evaluation for surgical treatment.'],
  },
  {
    title: 'Functional Neurosurgery',
    text: ['Assessment and surgical management of selected neurological disorders where functional neurosurgical intervention may be appropriate.'],
  },
  {
    title: 'Neuro Trauma Care',
    text: ['Evaluation and management of injuries involving the:'],
    items: ['Brain', 'Skull', 'Spine', 'Spinal Cord', 'Peripheral Nerves'],
  },
]

export const secondOpinion = {
  title: 'Already been advised surgery?',
  text: 'Bring your previous reports and imaging for a second opinion.',
  bookCta: 'Book a Second Opinion',
  waCta: 'WhatsApp Your Reports',
  waMessage: "Hi NeuGynesis, I'd like a second opinion from Dr. Dinesh Verma.",
  concern: 'Second opinion',
}

export const faqs = [
  {
    q: 'When should I consult a neurosurgeon for back or neck pain?',
    a: 'Persistent pain, pain radiating into the arms or legs, numbness, weakness or symptoms affecting daily activities may warrant specialist evaluation.',
  },
  {
    q: 'Is every spine problem treated with surgery?',
    a: 'No. Many spine conditions can initially be managed using non-surgical approaches. Surgery is considered when clinically appropriate based on symptoms, neurological findings and imaging.',
  },
  {
    q: 'When is urgent neurological care required?',
    a: 'Sudden weakness, facial drooping, difficulty speaking, loss of consciousness, seizures, severe sudden headache or major head/spine injury may require immediate emergency medical attention.',
  },
]
