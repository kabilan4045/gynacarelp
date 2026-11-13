// Every photograph on the page, in one place. Replace a file here and it changes everywhere.
// Stock photos live in /public/images/stock/ — sources and photographers: public/images/stock/CREDITS.md
//
// width/height = the file's real pixel size (prevents layout shift).
// position = CSS object-position, i.e. which part of the photo to keep when it is cropped.

export const images = {
  doctors: {
    // TEMPORARY stock photo – replace with real photo of Dr. Dinesh Verma before launch
    dinesh: {
      src: '/images/stock/doctor-placeholder-male.jpg',
      width: 1000,
      height: 1285,
      position: '50% 8%',
      alt: 'Placeholder portrait of a doctor (stock photo)',
      temporary: true,
    },
    // TEMPORARY stock photo – replace with real photo of Dr. Shobhna before launch
    shobhna: {
      src: '/images/stock/doctor-placeholder-female.jpg',
      width: 1000,
      height: 1500,
      position: '50% 30%',
      alt: 'Placeholder portrait of a doctor (stock photo)',
      temporary: true,
    },
  },

  neuroIntro: {
    src: '/images/stock/neuro-mri-room.jpg',
    width: 1600,
    height: 1067,
    position: '60% 50%',
    alt: 'A doctor stands beside a patient lying on the table of an MRI scanner',
  },
  neuroSpine: {
    src: '/images/stock/neuro-consultation.jpg',
    width: 1600,
    height: 1067,
    position: '50% 40%',
    alt: 'A doctor examines a seated patient with a stethoscope during a clinic consultation',
  },
  womensIntro: {
    src: '/images/stock/womens-couple.jpg',
    width: 1600,
    height: 1067,
    position: '35% 50%',
    alt: 'A pregnant woman in a traditional outfit rests a hand on her belly as her partner reaches for her hand',
  },
  maternity: {
    src: '/images/stock/maternity-consultation.jpg',
    width: 1600,
    height: 1067,
    position: '50% 55%',
    alt: 'A pregnant woman sits with her hands on her belly during a consultation',
  },
  whyUs: {
    src: '/images/stock/why-consultation.jpg',
    width: 1600,
    height: 900,
    position: '45% 40%',
    alt: 'A doctor listens to an older patient’s chest with a stethoscope in an examination room',
  },
}
