import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Chip from '../ui/Chip'
import DoctorPhoto from '../ui/DoctorPhoto'
import Fill, { Paras } from '../ui/Fill'
import { useSpecialty } from '../../context/SpecialtyContext'
import { keepInPlace } from '../../lib/scroll'
import { doctorSection as ds } from '../../data/shared'
import * as neuro from '../../data/neuro'
import * as womens from '../../data/womens'

const PROFILES = {
  neuro: { doctor: neuro.doctor, other: 'womens' },
  womens: { doctor: womens.doctor, other: 'neuro', research: womens.research, researchIntro: womens.researchIntro },
}

const SubHeading = ({ children }) => <h3 className="eyebrow mb-6 font-body text-ink">{children}</h3>

function Qualifications({ items }) {
  return (
    <Fill value={items} label="Qualifications [{ degree, institution }]">
      <ol className="relative space-y-6 pl-8">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-accent/25" />
        {items.map((q, i) => (
          <li key={i} className="relative">
            <span aria-hidden="true" className="absolute top-1.5 -left-7 size-[11px] rounded-full border-2 border-accent bg-bg" />
            <p className="font-semibold leading-snug text-ink">{q.degree}</p>
            {q.institution && <p className="mt-1 text-sm text-muted">{q.institution}</p>}
            {q.note && <p className="mt-1 text-sm text-muted">{q.note}</p>}
          </li>
        ))}
      </ol>
    </Fill>
  )
}

function Experience({ specialty, exp }) {
  if (specialty === 'neuro') {
    return (
      <>
        <div className="space-y-3 text-muted">
          <Fill value={exp.text} label="Clinical experience text">
            <Paras value={exp.text} />
          </Fill>
        </div>
        <Fill value={exp.areas} label="Clinical experience: 9 areas" className="mt-4">
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-ink">
            {exp.areas.map((a, i) => (
              <li key={a} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-accent/50">·</span>}
                {a}
              </li>
            ))}
          </ul>
        </Fill>
      </>
    )
  }
  return (
    <>
      {exp.intro && <p className="mb-4 text-muted">{exp.intro}</p>}
      <Fill value={exp.institutions} label="Experience: institutions list">
        <ul className="border-t border-line">
          {exp.institutions.map((a) => (
            <li key={a} className="border-b border-line py-2.5 text-sm text-ink">
              {a}
            </li>
          ))}
        </ul>
      </Fill>
      <Fill value={exp.closing} label="Experience closing line" className="mt-4">
        <p className="mt-6 text-muted">{exp.closing}</p>
      </Fill>
    </>
  )
}

function Profile({ specialty }) {
  const { setSpecialty, goToBooking } = useSpecialty()
  const { doctor: d, other, research, researchIntro } = PROFILES[specialty]
  const otherDoctor = PROFILES[other].doctor
  const [lookingFor, meet] = ds.switchLine(otherDoctor.specialtyLabel, otherDoctor.name)

  const switchDoctor = () => {
    keepInPlace(document.getElementById('doctor'))
    setSpecialty(other)
  }

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
      {/* Photo over a pale band */}
      <div className="relative min-w-0 lg:col-span-5">
        <div
          aria-hidden="true"
          className="absolute -left-4 right-10 top-[38%] h-[62%] rounded-r-card bg-accent-soft sm:-left-6 lg:-left-[100vw] lg:right-12 lg:top-40 lg:h-[360px]"
        />
        <div className="relative mx-auto w-[78%] max-w-[360px] pt-4 lg:sticky lg:top-[calc(var(--header-h)+var(--subnav-h)+32px)] lg:mx-0 lg:ml-[6%] lg:w-[80%]">
          <DoctorPhoto doctor={d.id} />
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 lg:col-span-7">
        <p className="eyebrow mb-4 flex items-center gap-3 text-accent">
          <span className="tabular-nums">{ds.number}</span>
          <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
          <span>{ds.eyebrow}</span>
        </p>
        <h2 id="doctor-title" className="text-title font-semibold">
          {d.name}
        </h2>
        <p className="mt-3 text-lead font-medium text-accent">{d.title}</p>

        <div className="mt-8 max-w-prose space-y-4 text-muted">
          <Fill value={d.bio} label={`${d.name}: bio paragraphs`}>
            <Paras value={d.bio} />
          </Fill>
        </div>

        <div className="mt-10">
          <SubHeading>{ds.areasTitle}</SubHeading>
          <Fill value={d.areasOfInterest} label="Areas of special interest">
            <ul className="flex flex-wrap gap-2">
              {d.areasOfInterest.map((a) => (
                <li key={a}>
                  <Chip>{a}</Chip>
                </li>
              ))}
            </ul>
          </Fill>
        </div>

        <div className="mt-12 grid gap-12 border-t border-line pt-10 md:grid-cols-2 md:gap-10">
          <div>
            <SubHeading>{ds.qualificationsTitle}</SubHeading>
            {d.qualificationsIntro && <p className="mb-5 text-muted">{d.qualificationsIntro}</p>}
            <Qualifications items={d.qualifications} />
          </div>
          <div>
            <SubHeading>{d.experience.title}</SubHeading>
            <Experience specialty={specialty} exp={d.experience} />
          </div>
        </div>

        {research && (
          <div className="mt-12 border-t border-line pt-10">
            <SubHeading>{ds.researchTitle}</SubHeading>
            {researchIntro && <p className="mb-5 max-w-prose text-muted">{researchIntro}</p>}
            <Fill value={research} label="Research & Publications: 7 titles">
              <ol className="border-t border-line">
                {research.map((t, i) => (
                  <li key={i} className="flex gap-4 border-b border-line py-2.5">
                    <span className="w-6 shrink-0 pt-0.5 font-heading text-sm tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-ink">{t}</span>
                  </li>
                ))}
              </ol>
            </Fill>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <Button variant="primary" size="lg" onClick={() => goToBooking(d.name, '')} className="h-auto! min-h-14 py-3 text-center whitespace-normal!">
            {ds.bookCta(d.name)}
          </Button>
          <button
            type="button"
            onClick={switchDoctor}
            className="group inline-flex flex-wrap items-center gap-x-1.5 text-left text-sm text-muted"
          >
            {lookingFor}
            <span className="inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors group-hover:text-accent group-hover:decoration-accent/40">
              {meet}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function DoctorProfile() {
  const { specialty } = useSpecialty()
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="section-y overflow-hidden bg-bg">
      <div className="container-x">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={specialty}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Profile specialty={specialty} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
