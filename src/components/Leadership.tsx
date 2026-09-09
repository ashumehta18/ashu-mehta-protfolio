import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Leadership"
          title="Community work, not employment."
          description="Student leadership focused on communication, organization, collaboration, and technical community involvement."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.leadership.map((item) => (
            <FadeIn key={item.organization}>
              <article className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-mono text-xs tracking-widest text-accent uppercase">
                  {item.role}
                </p>
                <h3 className="mt-2 font-heading text-2xl text-ink">{item.organization}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
