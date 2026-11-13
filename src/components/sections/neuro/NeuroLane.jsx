import { ArrowRight, ArrowUpRight, Phone, Siren } from 'lucide-react'
import Button from '../../ui/Button'
import Accordion from '../../ui/Accordion'
import TagList from '../../ui/TagList'
import WhatsAppIcon from '../../ui/WhatsAppIcon'
import Reveal from '../../ui/Reveal'
import Fill, { Paras } from '../../ui/Fill'
import { NeuralPattern } from '../../ui/Motifs'
import Photo from '../../ui/Photo'
import { images } from '../../../data/images'
import { clinic, telLink, waLink } from '../../../config/clinic'
import { useSpecialty } from '../../../context/SpecialtyContext'
import * as neuro from '../../../data/neuro'

const DOCTOR = neuro.doctor.name

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */

function AreaHeader({ index, title, subtitle, icon: Icon, iconClass = 'text-accent', size = 'h3' }) {
  return (
    <header>
      <p className="eyebrow mb-3 flex items-center gap-3 text-accent">
        <span className="tabular-nums">{index}</span>
        <span aria-hidden="true" className="h-px w-6 bg-accent/30" />
      </p>
      <h3 className={`flex items-start gap-3 font-medium ${size === 'h2' ? 'text-h2' : 'text-h3'}`}>
        {Icon && <Icon aria-hidden="true" className={`mt-1.5 size-6 shrink-0 ${iconClass}`} />}
        <span>{title}</span>
      </h3>
      {subtitle && <p className="mt-3 font-heading text-h4 font-medium text-accent">{subtitle}</p>}
    </header>
  )
}

const ListHeading = ({ children, count }) => (
  <h4 className="eyebrow mb-4 flex items-baseline justify-between font-body text-ink">
    <span>{children}</span>
    {count > 0 && <span className="tabular-nums text-muted">{String(count).padStart(2, '0')}</span>}
  </h4>
)

/* ------------------------------------------------------------------ */
/* 1. Lane intro                                                       */
/* ------------------------------------------------------------------ */

function LaneIntro() {
  return (
    <div className="relative overflow-hidden">
      <NeuralPattern className="absolute -left-16 bottom-0 hidden w-72 md:block" opacity={0.1} />
      <div className="container-x relative pb-12 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4 text-accent">
              {neuro.lane.eyebrow} <span className="hidden text-muted sm:inline">· {DOCTOR}</span>
            </p>
            <h2 className="text-title font-semibold">{neuro.lane.title}</h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-5">
            <Photo image={images.neuroIntro} ratio="aspect-[4/3]" />
          </Reveal>
        </div>
        <Reveal delay={0.08} className="mt-8 gap-10 text-muted md:columns-2 lg:mt-10 lg:ml-[8.333%] lg:max-w-[83.333%] [&>p+p]:mt-4 md:[&>p]:break-inside-avoid">
          <Fill value={neuro.lane.paragraphs} label="Lane intro: 2 paragraphs">
            <Paras value={neuro.lane.paragraphs} />
          </Fill>
        </Reveal>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. What brings you here?                                            */
/* ------------------------------------------------------------------ */

function Concerns() {
  const { goToBooking } = useSpecialty()
  return (
    <div className="container-x pb-16 lg:pb-24">
      <Reveal className="border-t border-line pt-8">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-h4 font-semibold">{neuro.concernsTitle}</h3>
          <p className="text-sm text-muted">Pick one and we'll add it to your appointment request.</p>
        </div>
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
          {neuro.concerns.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => goToBooking(DOCTOR, c)}
                className="group flex h-full min-h-12 w-full items-center justify-between gap-2 rounded-input border border-line bg-surface px-3.5 py-3 text-left text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent sm:px-4 sm:text-sm"
              >
                <span>{c}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted transition-[transform,color] group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent"
                />
              </button>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Reassurance pull-quote                                           */
/* ------------------------------------------------------------------ */

function Reassurance() {
  const { goToBooking } = useSpecialty()
  const r = neuro.reassurance
  return (
    <div className="bg-accent-soft">
      <div className="container-x py-16 lg:py-24">
        <Reveal as="figure" className="grid lg:grid-cols-12">
          <div className="border-l-4 border-indigo pl-6 sm:pl-8 lg:col-span-9 lg:col-start-2 lg:pl-12">
            <blockquote>
              <p className="font-heading text-title font-medium text-ink">
                {r.question} <strong className="font-semibold text-indigo">{r.answerLead}</strong>
              </p>
            </blockquote>
            <figcaption className="mt-6 max-w-prose space-y-3 text-lead text-muted">
              <Fill value={r.answer} label='FAQ answer to "Is every spine problem treated with surgery?"'>
                <Paras value={r.answer} />
              </Fill>
            </figcaption>
            <button
              type="button"
              onClick={() => goToBooking(DOCTOR, '')}
              className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-indigo underline decoration-indigo/25 decoration-2 underline-offset-[6px] transition-colors hover:decoration-indigo"
            >
              {r.cta}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Treatment areas                                                  */
/* ------------------------------------------------------------------ */

function Neurointervention() {
  const n = neuro.neurointervention
  return (
    <Reveal as="article" className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <AreaHeader index="1.1" title={n.title} subtitle={n.subtitle} />
        <div className="mt-6 space-y-4 text-muted">
          <Fill value={n.description} label="Neurointervention description">
            <Paras value={n.description} />
          </Fill>
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 lg:pt-2">
        {n.servicesTitle && <ListHeading count={n.services.length}>{n.servicesTitle}</ListHeading>}
        <Fill value={n.services} label="Neurointervention: 8 services">
          <TagList items={n.services} />
        </Fill>
      </div>
    </Reveal>
  )
}

function StrokeCare() {
  const s = neuro.stroke
  return (
    <Reveal as="article" className="rounded-card border border-line bg-surface p-6 sm:p-8 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <AreaHeader index="1.2" title={s.title} subtitle={s.subtitle} icon={Siren} iconClass="text-emergency" />
          <div className="mt-6 space-y-4 text-muted">
            <Fill value={s.paragraphs} label="Stroke Care: 2 paragraphs">
              <Paras value={s.paragraphs} />
            </Fill>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-input bg-[#FFF3EC] p-6 sm:p-6">
            <p className="eyebrow mb-3 text-emergency">Warning signs</p>
            <Fill value={s.warning} label="Stroke warning paragraph">
              <p className="font-heading text-h4 font-medium leading-snug text-[#4A1D0A]">{s.warning}</p>
            </Fill>
            <a
              href={telLink()}
              aria-label={`${s.cta}: ${clinic.phoneDisplay}`}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-emergency px-6 text-sm font-semibold text-white transition-colors hover:bg-[#9A3412] focus-visible:outline-emergency"
            >
              <Phone aria-hidden="true" className="size-4" />
              {s.cta}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Aneurysm() {
  const a = neuro.aneurysm
  return (
    <Reveal as="article" className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4">
        <AreaHeader index="1.3" title={a.title} />
      </div>
      <div className="lg:col-span-8">
        <div className="space-y-4 text-muted">
          <Fill value={a.text} label="Aneurysm text">
            <Paras value={a.text} />
          </Fill>
        </div>
        <div className="mt-8">
          <Fill value={a.options} label="Aneurysm: 3 treatment options">
            <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
              {a.options.map((opt, i) => (
                <li key={i} className="bg-surface p-6">
                  <span className="font-heading text-sm tabular-nums text-accent">Option {i + 1}</span>
                  <p className="mt-2 font-semibold leading-snug text-ink">{opt}</p>
                </li>
              ))}
            </ol>
          </Fill>
        </div>
        <Fill value={a.closing} label="Aneurysm closing line" className="mt-6">
          <p className="mt-6 font-heading text-h4 font-medium text-ink">{a.closing}</p>
        </Fill>
      </div>
    </Reveal>
  )
}

function Spine() {
  const s = neuro.spine
  return (
    <section aria-labelledby="neuro-spine-title" className="relative overflow-hidden bg-surface">
      <div className="rule-gradient absolute inset-x-0 top-0 opacity-60" aria-hidden="true" />
      <div className="container-x py-16 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3 flex items-center gap-3 text-muted">
              <span className="tabular-nums text-accent">1.4</span>
              <span aria-hidden="true" className="h-px w-6 bg-accent/30" />
            </p>
            <h3 id="neuro-spine-title" className="text-h2 font-semibold">
              {s.title}
            </h3>
            <p className="mt-4 font-heading text-h4 font-medium text-accent">{s.subtitle}</p>
          </div>
          <div className="space-y-4 text-lead text-muted lg:col-span-5 lg:col-start-8 lg:pt-10">
            <Fill value={s.intro} label="Spine intro text">
              <Paras value={s.intro} />
            </Fill>
          </div>
        </Reveal>

        <Reveal className="mt-12 lg:mt-16">
          <Photo image={images.neuroSpine} ratio="aspect-[4/3] md:aspect-[21/9]" />
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10 lg:mt-16 lg:gap-16">
          <Reveal>
            <ListHeading count={s.conditions.length}>{s.conditionsTitle}</ListHeading>
            <Fill value={s.conditions} label="Spine: 9 conditions evaluated">
              <TagList items={s.conditions} />
            </Fill>
          </Reveal>
          <Reveal delay={0.08}>
            <ListHeading count={s.procedures.length}>{s.proceduresTitle}</ListHeading>
            <Fill value={s.procedures} label="Spine: 7 procedures">
              <TagList items={s.procedures} tone="soft" />
            </Fill>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Panel({ index, data, label }) {
  return (
    <Reveal as="article" className="flex flex-col rounded-card border border-line bg-surface p-6 sm:p-8">
      <AreaHeader index={index} title={data.title} />
      <div className="mt-6 space-y-4 text-muted">
        <Fill value={data.intro} label={`${label} intro`}>
          <Paras value={data.intro} />
        </Fill>
      </div>
      <div className="mt-6 flex-1">
        <Fill value={data.items} label={`${label} list`}>
          <TagList items={data.items} tone="soft" />
        </Fill>
      </div>
      <Fill value={data.closing} label={`${label} closing line`} className="mt-6">
        <p className="mt-6 text-sm font-medium text-ink/80">{data.closing}</p>
      </Fill>
    </Reveal>
  )
}

function MoreAreas() {
  const items = neuro.moreAreas.map((area) => ({
    q: area.title,
    a: (
      <>
        <Fill value={area.text} label={`${area.title} text`}>
          <Paras value={area.text} />
        </Fill>
        {'items' in area && (
          <Fill value={area.items} label={`${area.title}: 5 areas`}>
            <TagList items={area.items} className="mt-2" />
          </Fill>
        )}
      </>
    ),
  }))

  return (
    <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4">
        <p className="eyebrow mb-3 flex items-center gap-3 text-muted">
          <span className="tabular-nums text-accent">1.7</span>
          <span aria-hidden="true" className="h-px w-6 bg-accent/30" />
        </p>
        <h3 className="text-h3 font-semibold">{neuro.moreAreasTitle}</h3>
        <p className="mt-3 text-sm text-muted">Open any area to read more.</p>
      </div>
      <div className="lg:col-span-8">
        <Accordion items={items} headingLevel={4} />
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* 5. Second-opinion band                                              */
/* ------------------------------------------------------------------ */

function SecondOpinion() {
  const { goToBooking } = useSpecialty()
  const s = neuro.secondOpinion
  return (
    <section aria-labelledby="neuro-second-opinion" className="relative overflow-hidden bg-band text-white">
      <NeuralPattern className="absolute -right-10 -bottom-16 w-72 lg:right-8 lg:w-96" color="#FFFFFF" opacity={0.1} />
      <div className="container-x relative grid gap-8 py-16 lg:grid-cols-12 lg:items-end lg:py-20">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-4 text-white/60">Second opinion · {DOCTOR}</p>
          <h3 id="neuro-second-opinion" className="text-h2 font-semibold text-white">
            {s.title}
          </h3>
          <p className="mt-4 max-w-prose text-lead text-white/75">{s.text}</p>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Button variant="light" size="lg" onClick={() => goToBooking(DOCTOR, s.concern)}>
            {s.bookCta}
          </Button>
          <Button variant="whatsapp" size="lg" href={waLink(s.waMessage)}>
            <WhatsAppIcon />
            {s.waCta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

export default function NeuroLane() {
  return (
    <div>
      <LaneIntro />
      <Concerns />
      <Reassurance />

      <div className="container-x space-y-16 py-16 lg:space-y-24 lg:py-24">
        <p className="eyebrow mb-8 flex items-center gap-4 text-muted lg:mb-12">
          {neuro.treatmentsTitle}
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </p>
        <Neurointervention />
        <StrokeCare />
        <Aneurysm />
      </div>

      <Spine />

      <div className="container-x space-y-16 py-16 lg:space-y-24 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <Panel index="1.5" data={neuro.vascular} label="Vascular Neurosurgery" />
          <Panel index="1.6" data={neuro.oncology} label="Neuro-Oncology" />
        </div>
        <MoreAreas />
      </div>

      <SecondOpinion />
    </div>
  )
}
