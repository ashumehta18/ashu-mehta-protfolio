import { Boxes, GraduationCap, Layers3, Users } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

const icons = [Layers3, Boxes, GraduationCap, Users]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title={portfolioData.about.heading}
          description={portfolioData.about.paragraphs[0]}
        />
        <FadeIn>
          <p className="max-w-2xl text-base leading-7 text-muted">
            {portfolioData.about.paragraphs[1]}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {portfolioData.about.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.about.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <FadeIn key={card.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-line bg-surface p-5">
                  <Icon className="text-accent" size={20} aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-lg text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
