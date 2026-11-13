import Reveal from '../ui/Reveal'
import Fill, { Paras, hasContent } from '../ui/Fill'
import { NeuralPattern, LeafCurves } from '../ui/Motifs'
import { approach as ap } from '../../data/shared'

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="relative overflow-hidden bg-band text-white">
      <NeuralPattern className="absolute -left-12 top-10 w-64 lg:w-80" color="#FFFFFF" opacity={0.08} />
      <LeafCurves className="absolute -right-16 -bottom-10 w-72 lg:w-96" color="#FFFFFF" opacity={0.08} />

      <div className="container-x section-y relative">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6 flex items-center gap-3 text-white/60">
              <span className="tabular-nums">{ap.number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-white/30" />
              <span>{ap.eyebrow}</span>
            </p>
            <h2 id="approach-title" className="text-display font-medium text-white">
              {ap.statement}
            </h2>
          </div>
          {hasContent(ap.intro) && (
            <div className="space-y-4 text-lead text-white/75 lg:col-span-4 lg:pt-14">
              <Paras value={ap.intro} />
            </div>
          )}
        </Reveal>

        <ol className="relative mt-14 grid gap-0 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* connecting line: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[7px] w-px bg-[image:linear-gradient(180deg,#6C66C9,#B65FC4,#E0558F)] lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:bg-[image:linear-gradient(90deg,#6C66C9,#B65FC4,#E0558F)]"
          />
          {ap.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="relative grid grid-cols-[15px_1fr] gap-x-6 pb-10 last:pb-0 lg:block lg:pb-0">
              <span aria-hidden="true" className="relative z-10 mt-1.5 block size-[15px] rounded-full border-2 border-white/80 bg-band lg:mt-0" />
              <div className="lg:mt-8">
                <span aria-hidden="true" className="block font-heading text-numeral font-medium tabular-nums text-white/45">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-h3 font-semibold text-white">{s.title}</h3>
                <div className="mt-3 space-y-3 text-white/70">
                  <Fill value={s.text} label={`"${s.title}" step text`}>
                    <Paras value={s.text} />
                  </Fill>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
