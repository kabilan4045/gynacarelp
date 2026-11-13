import Reveal from '../ui/Reveal'
import Fill, { Paras } from '../ui/Fill'
import Photo from '../ui/Photo'
import { images } from '../../data/images'
import { whyChooseUs as wc } from '../../data/shared'

export default function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-title" className="section-y border-t border-line bg-surface">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left: sticky on desktop */}
        <div className="lg:col-span-5">
          <Reveal className="lg:[@media(min-height:880px)]:sticky lg:top-[calc(var(--header-h)+var(--subnav-h)+40px)]">
            <p className="eyebrow mb-4 flex items-center gap-3 text-accent">
              <span className="tabular-nums">{wc.number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
              <span>{wc.eyebrow}</span>
            </p>
            <h2 id="why-us-title" className="text-h2 font-semibold">
              {wc.title}
            </h2>
            <div className="mt-6 space-y-4 text-lead text-muted">
              <Fill value={wc.intro} label="Why Choose Us intro">
                <Paras value={wc.intro} />
              </Fill>
            </div>
            <Photo image={images.whyUs} ratio="aspect-[16/10]" className="mt-8" />
          </Reveal>
        </div>

        {/* Right: numbered list */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Fill value={wc.items} label="Why Choose Us: 5 points [{ title, text }]">
            <ol className="border-t border-line">
              {wc.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={Math.min(i, 2) * 0.05} className="grid grid-cols-[48px_1fr] gap-x-4 border-b border-line py-8 sm:grid-cols-[64px_1fr] lg:py-10">
                  <span className="pt-1 font-heading text-h3 tabular-nums leading-none text-accent/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-h3 font-semibold">{item.title}</h3>
                    <div className="mt-3 space-y-3 text-muted">
                      <Paras value={item.text} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Fill>
        </div>
      </div>
    </section>
  )
}
