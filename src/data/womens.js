// Women's Health & Fertility content — verbatim from clinic-content.md ("GYNAECOLOGY & FERTILITY PAGE",
// "DR. SHOBHNA – …", "RESEARCH & PUBLICATIONS", home page specialist + speciality blocks, fertility FAQ).
// Paragraph fields are arrays of strings; list fields are arrays of strings.

export const doctor = {
  id: 'shobhna',
  name: 'Dr. Shobhna',
  title: 'Reproductive Medicine Specialist, Obstetrician & Gynaecologist',
  specialtyLabel: "Women's Health & Fertility",
  // Short line for the hero card (from the Key Services list)
  keyServices: ['Fertility', 'IVF', 'Pregnancy'],
  bio: [
    'Dr. Shobhna is an experienced specialist in Reproductive Medicine, Obstetrics and Gynaecology, with more than 10 years of clinical experience.',
    'Her practice has a special focus on evaluating and treating fertility-related concerns through an individualised, patient-centred approach. She works closely with couples experiencing difficulty conceiving, helping them understand the possible causes and available treatment pathways.',
    'Her key areas of expertise include infertility, recurrent IVF failure, recurrent pregnancy loss, PCOS, endometriosis, uterine abnormalities, fertility preservation and assisted reproductive techniques.',
    'She is also trained in advanced laparoscopic and hysteroscopic gynaecological surgery and provides comprehensive obstetric care, including normal and high-risk pregnancies.',
  ],
  areasOfInterest: [
    'Infertility & Assisted Reproduction',
    'Recurrent Implantation Failure',
    'Recurrent Pregnancy Loss',
    'PCOS',
    'Endometriosis',
    'Fertility Preservation',
    'Laparoscopic Surgery',
    'Hysteroscopic Surgery',
    'High-Risk Pregnancy',
    'Adolescent & Menopausal Health',
  ],
  qualificationsIntro: 'Dr. Shobhna’s medical training includes:',
  qualifications: [
    { degree: 'FNB – Reproductive Medicine', institution: 'Institute of Reproductive Medicine, Madras Medical Mission, Chennai' },
    { degree: 'MRCOG Part 1', institution: 'Royal College of Obstetricians and Gynaecologists' },
    { degree: 'MD – Obstetrics & Gynaecology', institution: "King George's Medical University, Lucknow" },
    { degree: 'DNB – Obstetrics & Gynaecology' },
    { degree: 'MBBS', institution: 'Manipal Academy of Higher Education' },
    { degree: 'MNAMS', institution: 'Member of the National Academy of Medical Sciences' },
  ],
  experience: {
    title: 'Experience',
    intro: 'With more than 10 years of experience, Dr. Shobhna has worked with reputed healthcare institutions including:',
    institutions: [
      'Command Hospital, Central Command',
      'Base Hospital, Delhi Cantt',
      'Institute of Reproductive Medicine, Madras Medical Mission, Chennai',
    ],
    closing:
      'Her experience spans reproductive medicine, fertility care, obstetrics, gynaecology and minimally invasive gynaecological procedures.',
  },
}

// Home page "Our Specialities" block
export const overview = {
  title: 'Gynaecology, Fertility & Reproductive Medicine',
  description:
    "Personalised care for women and couples across different stages of reproductive and women's health—from adolescence and fertility planning to pregnancy and menopause.",
  keyServicesTitle: 'Key Services',
  keyServices: [
    'Infertility Evaluation & Treatment',
    'IVF & ICSI',
    'IUI',
    'Recurrent IVF Failure',
    'Recurrent Pregnancy Loss',
    'PCOS / PCOD Management',
    'Endometriosis Treatment',
    'Fertility Preservation',
    'Laparoscopic & Hysteroscopic Surgery',
    'High-Risk Pregnancy Care',
    'Menstrual Disorder Management',
    'Adolescent Gynaecology',
    'Menopause & Hormonal Care',
    'Cancer Screening',
  ],
  cta: 'Explore Women’s Health & Fertility',
}

export const lane = {
  eyebrow: "Women's Health & Fertility",
  title: 'Comprehensive Women’s Health & Fertility Care',
  paragraphs: [
    'Every woman’s health journey is different. Our approach is centred around understanding your concerns, identifying the underlying cause and developing an appropriate treatment plan based on your individual needs.',
    'From fertility evaluation and assisted reproduction to pregnancy care, minimally invasive surgery and hormonal health, Dr. Shobhna provides care across multiple stages of a woman’s life.',
  ],
}

// "Where are you in your journey?" Also feeds the booking dropdown.
export const concernsTitle = 'Where are you in your journey?'
export const concerns = [
  'Trying to conceive',
  "IVF didn't work before",
  'Repeated pregnancy loss',
  'PCOS / PCOD',
  'Endometriosis',
  'Pregnancy care',
]

/* ---------- Fertility & Reproductive Medicine ---------- */
export const fertility = {
  title: 'Fertility & Reproductive Medicine',
  intro: [],
  evaluation: {
    title: 'Infertility Evaluation & Treatment',
    text: ['Comprehensive evaluation of both partners to understand possible factors affecting conception and determine suitable treatment options.'],
    items: [],
  },
  // `title` = short card label, `fullTitle` = heading as written in the content
  art: [
    {
      title: 'IVF',
      fullTitle: 'IVF – In Vitro Fertilisation',
      text: ['Assisted reproductive treatment involving ovarian stimulation, egg collection, fertilisation and embryo transfer based on individual clinical requirements.'],
    },
    {
      title: 'ICSI',
      fullTitle: 'ICSI',
      text: [
        'Intracytoplasmic Sperm Injection involves the injection of a selected sperm directly into an egg and may be considered in specific cases of male-factor infertility or previous fertilisation difficulties.',
      ],
    },
    {
      title: 'IUI',
      fullTitle: 'Intrauterine Insemination – IUI',
      text: ['A fertility treatment in which specially prepared sperm is introduced into the uterus around the time of ovulation.'],
    },
  ],
  focusEyebrow: 'Specialised focus',
  focus: [
    {
      title: 'Recurrent Implantation Failure – RIF',
      text: ['Specialised evaluation for couples who have experienced repeated unsuccessful embryo implantation following IVF treatment.'],
      items: [],
    },
    {
      title: 'Recurrent Pregnancy Loss – RPL',
      text: ['Detailed assessment and appropriate management for women experiencing repeated pregnancy losses.'],
      items: [],
    },
  ],
  preservation: {
    title: 'Fertility Preservation',
    text: [
      'Fertility preservation options may be discussed for eligible men and women based on age, medical condition, planned treatment or personal reproductive goals.',
    ],
  },
}

/* ---------- Donor, male fertility, pre-IVF ---------- */
// From the couples-counselling FAQ
export const bothPartnersLine = 'Fertility evaluation generally considers both partners'

export const donor = {
  title: 'Egg, Embryo & Donor Programs',
  intro: ['Counselling and treatment planning for eligible couples considering:'],
  items: ['Egg Donation', 'Embryo Donation', 'Donor Sperm Insemination', 'Surrogacy Programs, where legally and medically appropriate'],
}

export const male = {
  title: 'Male Fertility & Andrology',
  intro: ['Services include:'],
  items: ['Semen Analysis', 'Sperm Preparation', 'Evaluation of Azoospermia', 'TESA', 'TESE', 'PESA', 'Male Fertility Counselling'],
}

export const preIvf = {
  title: 'Pre-IVF Assessment',
  intro: 'Depending on clinical requirements, evaluation before fertility treatment may include:',
  items: [
    'Hysteroscopy',
    'Saline Sonography',
    'Trial / Dummy Embryo Transfer',
    'Hormonal Evaluation',
    'Ultrasound Assessment',
    'Male Fertility Evaluation',
  ],
}

/* ---------- Sexual & Reproductive Health ---------- */
export const sexualHealth = {
  title: 'Sexual & Reproductive Health',
  confidential: 'Confidential consultation',
  intro: ['Confidential consultation and treatment are available for reproductive and sexual health concerns, including:'],
  items: [
    'Erectile Dysfunction',
    'Retrograde Ejaculation',
    'Sexual Dysfunction in Couples',
    'Premarital Counselling',
    'Pre-Conception Counselling',
    'Sexually Transmitted Infections',
  ],
}

/* ---------- Gynaecology ---------- */
export const gynaecologyTitle = 'Gynaecology Services'
export const gynaecology = [
  {
    title: 'PCOS / PCOD',
    text: ['Evaluation and management of hormonal, menstrual, metabolic and fertility-related concerns associated with Polycystic Ovary Syndrome.'],
  },
  {
    title: 'Endometriosis',
    text: ['Evaluation and medical or surgical management of endometriosis based on symptoms, fertility goals and severity.'],
  },
  {
    title: 'Menstrual Disorders',
    text: ['Consultation for:'],
    items: ['Irregular Periods', 'Heavy Bleeding', 'Painful Periods', 'Absent Periods', 'Abnormal Uterine Bleeding'],
  },
  {
    title: 'Dysmenorrhoea & PMS',
    text: ['Evaluation and management of painful periods and symptoms associated with premenstrual syndrome.'],
  },
  {
    title: 'Adolescent Gynaecology',
    text: ['Sensitive and age-appropriate care for menstrual, hormonal and reproductive health concerns in adolescent girls.'],
  },
  {
    title: 'Urogynaecology',
    text: ['Evaluation and treatment of conditions including urinary incontinence and pelvic-floor-related concerns.'],
  },
  {
    title: 'Menopause & Hormonal Health',
    text: ['Guidance and treatment for menopausal symptoms, including evaluation for Hormone Replacement Therapy where appropriate.'],
  },
]

export const procedures = {
  title: 'Gynaecological Procedures & Surgeries',
  intro: 'Dr. Shobhna has experience in a broad range of gynaecological procedures, including:',
  items: [
    'Advanced Laparoscopic Surgery',
    'Hysteroscopic Surgery',
    'Total Abdominal Hysterectomy',
    'Vaginal Hysterectomy',
    'Non-Descent Vaginal Hysterectomy',
    'Laparoscopic Tubal Ligation',
    'Laparoscopic Salpingectomy',
    'Transobturator Tape Procedure',
    'Suction Evacuation',
    'Endometrial Sampling',
    'IUCD Insertion',
    'Mirena Insertion',
    'Colposcopy',
    'LEEP',
    'Cryotherapy for selected cervical conditions',
  ],
}

/* ---------- Maternity ---------- */
export const maternity = {
  title: 'Maternity & Pregnancy Care',
  subtitle: 'Care Through Every Stage of Pregnancy',
  text: ['Dr. Shobhna provides personalised antenatal and maternal care for both routine and high-risk pregnancies.'],
  servicesLead: 'Services include:',
  services: [
    'Pre-Conception Counselling',
    'Antenatal Care',
    'Maternal Health Monitoring',
    'High-Risk Pregnancy Care',
    'Normal Delivery',
    'Caesarean Delivery',
    'Vacuum-Assisted Delivery',
    'Instrumental Delivery',
    'Postnatal Care',
  ],
}

/* ---------- Preventive ---------- */
export const preventive = {
  title: "Women's Preventive Health",
  text: [
    'Preventive screening and early evaluation can play an important role in women’s long-term health.',
    'Available services include:',
  ],
  items: ['Cervical Cancer Screening', 'Pap Smear', 'Breast Health Assessment', 'Colposcopy', 'Endometrial Evaluation'],
}

/* ---------- Privacy band ---------- */
export const privacyBand = {
  eyebrow: 'Private consultations',
  title: 'A private, unhurried space to talk.',
  text: 'Your consultation is confidential. Take the time you need to ask questions and talk through your options with Dr. Shobhna.',
  bookCta: 'Book with Dr. Shobhna',
  waCta: 'WhatsApp Us',
  waMessage: "Hi NeuGynesis, I'd like to consult Dr. Shobhna.",
}

export const faqs = [
  {
    q: 'Do you provide fertility counselling for couples?',
    a: 'Yes. Fertility evaluation generally considers both partners because reproductive health factors may involve either or both partners.',
  },
]

export const researchIntro =
  'Dr. Shobhna has contributed to research and academic work in reproductive medicine and women’s health, including topics such as:'
export const research = [
  'Growth Discordance in Assisted-Conception DCDA Twins',
  'Impact of Mid-Luteal Serum Progesterone and Estradiol Levels on Frozen Embryo Transfer Outcomes',
  'Key Performance Indicators as Standards of Quality in ART Laboratories',
  'PCOS in Young and Adolescent Girls',
  'Sperm DNA Fragmentation, Lifestyle Factors and Pregnancy Outcomes',
  'IVF Pregnancy in a Patient with Deep Invasive Endometriosis and Colostomy',
  'Reproductive Challenges Associated with May-Thurner Syndrome',
]
