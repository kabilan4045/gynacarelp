import { ArrowRight, Lock } from 'lucide-react'
import Button from '../../ui/Button'
import TagList from '../../ui/TagList'
import WhatsAppIcon from '../../ui/WhatsAppIcon'
import Reveal from '../../ui/Reveal'
import Fill, { Paras, hasContent } from '../../ui/Fill'
import { LeafCurves } from '../../ui/Motifs'
import Photo from '../../ui/Photo'
import { images } from '../../../data/images'
import { waLink } from '../../../config/clinic'
import { useSpecialty } from '../../../context/SpecialtyContext'
import * as w from '../../../data/womens'

const DOCTOR = w.doctor.name

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

/** Sub-section index within section 01 ("1.3"), plus an optional label. */
function Eyebrow({ index, label, className = '' }) {
  return (
    <p className={`eyebrow mb-3 flex items-center gap-3 text-muted ${className}`}>
      <span className="tabular-nums text-accent">{index}</span>
      <span aria-hidden="true" className="h-px w-6 bg-accent/30" />
      {label && <span>{label}</span>}
    </p>
  )
}


/** Paragraphs + optional list for a block whose shape we don't fully know yet. */
function TextAndList({ data, label }) {
  return (
    <>
      <div className="space-y-4 text-muted">
        <Fill value={data.text ?? data.intro} label={`${label} text`}>
          <Paras value={data.text ?? data.intro} />
        </Fill>
      </div>
      {hasContent(data.items) && <TagList items={data.items} className="mt-6" />}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 1. Lane intro                                                       */
/* ------------------------------------------------------------------ */

function LaneIntro() {
  return (
    <div className="relative overflow-hidden">
      <LeafCurves className="absolute -right-20 -top-10 hidden w-96 md:block lg:-right-6 lg:w-[440px]" opacity={0.16} />
      {/* Staircase: heading, then the text stepped in beneath it */}
      <div className="container-x relative grid gap-8 pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
        <Reveal className="lg:col-span-8">
          <p className="eyebrow mb-4 text-accent">
            {w.lane.eyebrow} <span className="hidden text-muted sm:inline">· {DOCTOR}</span>
          </p>
          <h2 className="text-title font-semibold">{w.lane.title}</h2>
        </Reveal>
        <Reveal delay={0.08} className="space-y-4 text-lead text-muted lg:col-span-7 lg:col-start-5">
          <Fill value={w.lane.paragraphs} label="Lane intro: 2 paragraphs">
            <Paras value={w.lane.paragraphs} />
          </Fill>
        </Reveal>
        {/* fills the open step of the staircase on desktop */}
        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-1 lg:row-start-2">
          <Photo image={images.womensIntro} ratio="aspect-[4/3] lg:aspect-[4/5]" />
        </Reveal>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Where are you in your journey? (a soft "path" of pills)          */
/* ------------------------------------------------------------------ */

function Journey() {
  const { goToBooking } = useSpecialty()
  return (
    <div className="container-x pb-16 lg:pb-24">
      <Reveal className="rounded-soft bg-accent-soft px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
        <h3 className="text-h3 font-semibold">{w.concernsTitle}</h3>
        <p className="mt-2 text-sm text-muted">Choose what fits best and we'll note it on your appointment request.</p>
        <ol className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-3">
          {w.concerns.map((c, i) => (
            <li key={c} className="flex items-center">
              <button
                type="button"
                onClick={() => goToBooking(DOCTOR, c)}
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/20 bg-surface px-4 py-2 text-left text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white sm:px-6 sm:text-sm"
              >
                {c}
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 text-accent transition-[transform,color] group-hover:translate-x-0.5 group-hover:text-white"
                />
              </button>
              {i < w.concerns.length - 1 && (
                <span aria-hidden="true" className="mx-1 hidden h-px w-5 bg-accent/30 sm:block" />
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Fertility & Reproductive Medicine                                */
/* ------------------------------------------------------------------ */

function Fertility() {
  const f = w.fertility
  return (
    <div className="container-x space-y-12 lg:space-y-16">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Eyebrow index="1.1" />
          <h3 className="text-h2 font-semibold">{f.title}</h3>
        </div>
        {hasContent(f.intro) && (
          <div className="space-y-4 text-lead text-muted lg:col-span-5 lg:col-start-8 lg:pt-8">
            <Paras value={f.intro} />
          </div>
        )}
      </Reveal>

      {/* Lead block: the entry point */}
      <Reveal
        as="article"
        className="grid gap-6 rounded-card rounded-tr-[72px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:rounded-tr-[120px] lg:p-12"
      >
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3 text-accent">Start here</p>
          <h4 className="text-h3 font-semibold">{f.evaluation.title}</h4>
        </div>
        <div className="lg:col-span-7">
          <TextAndList data={f.evaluation} label="Infertility Evaluation & Treatment" />
        </div>
      </Reveal>

      {/* IVF / ICSI / IUI: the lane's one card grid */}
      <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
        {f.art.map((a, i) => (
          <Reveal key={a.title} as="article" delay={i * 0.06} className="flex flex-col rounded-card border border-line bg-surface p-6 lg:p-8">
            <span className="font-heading text-sm tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="mt-6 font-heading text-h2 font-semibold tracking-tight text-ink">
              {a.title}
              {a.fullTitle && a.fullTitle !== a.title && (
                <span className="mt-1 block font-body text-sm font-medium tracking-normal text-muted">{a.fullTitle}</span>
              )}
            </h4>
            <div className="rule-gradient my-5 w-10" aria-hidden="true" />
            <div className="space-y-3 text-muted">
              <Fill value={a.text} label={`${a.title} description`}>
                <Paras value={a.text} />
              </Fill>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Specialised focus: Dr. Shobhna's niche */}
      <Reveal as="section" aria-labelledby="womens-focus" className="relative overflow-hidden rounded-soft bg-accent-soft p-6 sm:p-10 lg:p-14">
        <LeafCurves className="absolute -bottom-16 -right-16 w-72 lg:w-96" opacity={0.2} />
        <p id="womens-focus" className="eyebrow relative mb-8 text-accent">
          {f.focusEyebrow} · {DOCTOR}
        </p>
        <div className="relative grid gap-10 md:grid-cols-2 md:gap-12">
          {f.focus.map((item) => (
            <article key={item.title} className="border-t border-accent/25 pt-6">
              <h4 className="text-h3 font-semibold">{item.title}</h4>
              <div className="mt-4">
                <TextAndList data={item} label={item.title} />
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* Short text block */}
      <Reveal as="article" className="grid gap-4 lg:grid-cols-12 lg:gap-8">
        <h4 className="font-heading text-h3 font-semibold lg:col-span-4">{f.preservation.title}</h4>
        <div className="space-y-4 text-muted lg:col-span-7 lg:col-start-6">
          <Fill value={f.preservation.text} label="Fertility Preservation text">
            <Paras value={f.preservation.text} />
          </Fill>
        </div>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Donor programmes, male fertility, pre-IVF                        */
/* ------------------------------------------------------------------ */

function Partners() {
  const p = w.preIvf
  return (
    <div className="container-x">
      <Reveal>
        <Eyebrow index="1.2" label="Both partners" />
        <p className="max-w-3xl font-heading text-h3 font-medium text-ink">{w.bothPartnersLine}</p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        {[
          { data: w.donor, label: '4 items' },
          { data: w.male, label: '7 services' },
        ].map(({ data, label }, i) => (
          <Reveal key={data.title} as="article" delay={i * 0.06}>
            <h4 className="mb-4 flex items-baseline justify-between gap-4 text-h4 font-semibold">
              {data.title}
              {data.items.length > 0 && (
                <span className="font-body text-sm tabular-nums text-muted">{String(data.items.length).padStart(2, '0')}</span>
              )}
            </h4>
            {hasContent(data.intro) && (
              <div className="mb-4 space-y-3 text-muted">
                <Paras value={data.intro} />
              </div>
            )}
            <Fill value={data.items} label={`${data.title}: ${label}`}>
              <TagList items={data.items} />
            </Fill>
          </Reveal>
        ))}
      </div>

      {/* Pre-IVF: numbered row on desktop, vertical on mobile */}
      <Reveal as="article" className="mt-16 rounded-card border border-line bg-surface p-6 sm:p-8 lg:mt-24 lg:p-10">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
          <h4 className="text-h3 font-semibold lg:col-span-4">{p.title}</h4>
          <div className="text-muted lg:col-span-8 lg:pt-1">
            <Fill value={p.intro} label="Pre-IVF intro line">
              <p>{p.intro}</p>
            </Fill>
          </div>
        </div>
        <Fill value={p.items} label="Pre-IVF: 6 items" className="mt-8">
          <ol className="mt-8 grid grid-cols-2 gap-x-4 border-t border-line sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-0 lg:border-t-0">
            {p.items.map((it, i) => (
              <li
                key={it}
                className="flex gap-2 border-b border-line py-3 lg:flex-col lg:gap-3 lg:border-b-0 lg:border-t-2 lg:border-t-accent/20 lg:py-0 lg:pt-4 lg:pr-4 lg:first:border-t-accent"
              >
                <span className="w-6 shrink-0 font-heading text-sm tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium leading-snug text-ink lg:text-sm">{it}</span>
              </li>
            ))}
          </ol>
        </Fill>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 5. Sexual & Reproductive Health (calm, private)                     */
/* ------------------------------------------------------------------ */

function SexualHealth() {
  const s = w.sexualHealth
  return (
    <div className="bg-surface">
      <div className="container-x py-16 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Eyebrow index="1.3" />
            <h3 className="text-h2 font-semibold">{s.title}</h3>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-accent-soft py-2 pr-4 pl-3 text-sm font-semibold text-accent-strong">
              <Lock aria-hidden="true" className="size-4" />
              {s.confidential}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <div className="space-y-4 text-lead text-muted">
              <Fill value={s.intro} label="Sexual & Reproductive Health intro">
                <Paras value={s.intro} />
              </Fill>
            </div>
            <Fill value={s.items} label="Sexual & Reproductive Health: 6 items" className="mt-6">
              <TagList items={s.items} className="mt-8" />
            </Fill>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 6. Gynaecology (typographic rows, no cards)                         */
/* ------------------------------------------------------------------ */

function Gynaecology() {
  return (
    <div className="container-x">
      <Reveal>
        <Eyebrow index="1.4" />
        <h3 className="text-h2 font-semibold">{w.gynaecologyTitle}</h3>
      </Reveal>
      <div className="mt-10 border-t border-line">
        {w.gynaecology.map((g, i) => (
          <Reveal key={g.title} as="article" delay={Math.min(i, 3) * 0.04} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 lg:py-10">
            <h4 className="font-heading text-h4 font-semibold md:col-span-4 lg:text-h3">{g.title}</h4>
            <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
              <TextAndList data={g} label={g.title} />
              {'items' in g && !hasContent(g.items) && (
                <Fill value={g.items} label={`${g.title}: 5 items`} className="mt-4" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 7. Procedures                                                       */
/* ------------------------------------------------------------------ */

function Procedures() {
  const p = w.procedures
  return (
    <div className="container-x">
      <Reveal className="grid gap-4 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Eyebrow index="1.5" />
          <h3 className="text-h3 font-semibold">{p.title}</h3>
        </div>
        <div className="text-muted lg:col-span-5 lg:col-start-8 lg:pt-8">
          <Fill value={p.intro} label="Procedures intro line">
            <p>{p.intro}</p>
          </Fill>
        </div>
      </Reveal>
      <Reveal className="mt-8">
        <Fill value={p.items} label="Procedures: 15 items">
          <TagList items={p.items} />
        </Fill>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 8. Maternity: journey timeline                                      */
/* ------------------------------------------------------------------ */

function Maternity() {
  const m = w.maternity
  return (
    <div className="relative overflow-hidden bg-accent-soft">
      <LeafCurves className="absolute -left-24 -top-10 w-80 -scale-x-100 lg:w-[420px]" opacity={0.18} />
      <div className="container-x relative py-16 lg:py-24">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow index="1.6" label={m.title} />
            <h3 className="text-h2 font-semibold">{m.subtitle}</h3>
          </div>
          <div className="space-y-4 text-lead text-muted lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:pt-8">
            <Fill value={m.text} label="Maternity text">
              <Paras value={m.text} />
            </Fill>
          </div>
          <div className="mt-2 lg:col-span-6 lg:row-start-2 lg:mt-4">
            <Photo image={images.maternity} ratio="aspect-[3/2]" />
          </div>
        </Reveal>

        {m.servicesLead && <p className="eyebrow mt-12 text-muted lg:mt-16">{m.servicesLead}</p>}
        <Fill value={m.services} label="Maternity: 9 services (timeline)" className="mt-10">
          <Reveal as="ol" className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-8 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none lg:gap-4">
            {/* the line: vertical on mobile, horizontal on desktop */}
            <span aria-hidden="true" className="absolute top-[7px] right-0 left-0 hidden h-px bg-magenta/40 lg:block" />
            {m.services.map((s, i) => (
              <li key={s} className="relative rounded-input bg-surface p-3 lg:flex lg:flex-col lg:gap-4 lg:rounded-none lg:bg-transparent lg:p-0">
                <span aria-hidden="true" className="relative z-10 hidden size-[15px] shrink-0 rounded-full border-2 border-magenta bg-accent-soft lg:block" />
                <span>
                  <span className="block font-heading text-sm tabular-nums text-magenta">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-1 block text-sm font-medium leading-snug text-ink lg:text-sm">{s}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </Fill>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 9. Preventive health (compact)                                      */
/* ------------------------------------------------------------------ */

function Preventive() {
  const p = w.preventive
  return (
    <div className="container-x">
      <Reveal className="grid gap-6 rounded-card border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
        <div className="lg:col-span-5">
          <Eyebrow index="1.7" />
          <h3 className="text-h3 font-semibold">{p.title}</h3>
          <div className="mt-4 space-y-3 text-muted">
            <Fill value={p.text} label="Preventive health text">
              <Paras value={p.text} />
            </Fill>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-8">
          <Fill value={p.items} label="Preventive health: 5 services">
            <TagList items={p.items} />
          </Fill>
        </div>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 10. Privacy band                                                    */
/* ------------------------------------------------------------------ */

function PrivacyBand() {
  const { goToBooking } = useSpecialty()
  const b = w.privacyBand
  return (
    <section aria-labelledby="womens-privacy" className="relative overflow-hidden bg-band-berry text-white">
      <LeafCurves className="absolute -right-10 -bottom-20 w-80 lg:right-10 lg:w-[420px]" color="#FFFFFF" opacity={0.1} />
      <div className="container-x relative grid gap-8 py-16 lg:grid-cols-12 lg:items-end lg:py-20">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-4 flex items-center gap-2 text-white/60">
            <Lock aria-hidden="true" className="size-3.5" />
            {b.eyebrow}
          </p>
          <h3 id="womens-privacy" className="text-h2 font-semibold text-white">
            {b.title}
          </h3>
          <p className="mt-4 max-w-prose text-lead text-white/75">{b.text}</p>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Button variant="light" size="lg" onClick={() => goToBooking(DOCTOR, '')}>
            {b.bookCta}
          </Button>
          <Button variant="whatsapp" size="lg" href={waLink(b.waMessage)}>
            <WhatsAppIcon />
            {b.waCta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

export default function WomensLane() {
  return (
    <div>
      <LaneIntro />
      <Journey />
      <div className="pb-16 lg:pb-24">
        <Fertility />
      </div>
      <div className="pb-16 lg:pb-24">
        <Partners />
      </div>
      <SexualHealth />
      <div className="space-y-16 py-16 lg:space-y-24 lg:py-24">
        <Gynaecology />
        <Procedures />
      </div>
      <Maternity />
      <div className="py-16 lg:py-24">
        <Preventive />
      </div>
      <PrivacyBand />
    </div>
  )
}
