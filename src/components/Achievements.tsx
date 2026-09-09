import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones from competitions and learning."
        />
        <ol className="relative space-y-6 border-l border-line pl-6">
          {portfolioData.achievements.map((item, index) => (
            <FadeIn key={`${item.title}-${item.organization}`} delay={index * 0.05}>
              <li className="relative">
                <span
                  className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border border-accent bg-canvas"
                  aria-hidden="true"
                />
                <article className="rounded-2xl border border-line bg-surface p-5">
                  <p className="font-mono text-xs tracking-widest text-accent uppercase">
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-heading text-xl text-ink">{item.title}</h3>
                  <p className="text-sm text-muted">{item.organization}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                </article>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
