import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Academic background." />
        <div className="grid gap-3 md:grid-cols-3">
          {portfolioData.education.map((item) => (
            <FadeIn key={item.title}>
              <article className="rounded-xl border border-line bg-surface p-4">
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h3 className="mt-2 text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">{item.institution}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
