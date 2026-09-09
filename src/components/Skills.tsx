import { useMemo, useState } from 'react'
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Server,
  SquareTerminal,
  Wrench,
} from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { cn } from '../lib/utils'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

const ICONS = {
  languages: Code2,
  frontend: Braces,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  tools: Wrench,
  cs: SquareTerminal,
} as const

export function Skills() {
  const [active, setActive] = useState('all')
  const groups = portfolioData.skillGroups
  const visible = useMemo(
    () => (active === 'all' ? groups : groups.filter((group) => group.id === active)),
    [active, groups],
  )

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="A stack organized for real product work."
          description="Technologies from coursework and project work, grouped for quick scanning. No proficiency percentages."
        />
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          <FilterChip selected={active === 'all'} onClick={() => setActive('all')}>
            All
          </FilterChip>
          {groups.map((group) => (
            <FilterChip
              key={group.id}
              selected={active === group.id}
              onClick={() => setActive(group.id)}
            >
              {group.title}
            </FilterChip>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((group) => {
            const Icon = ICONS[group.id as keyof typeof ICONS] ?? Code2
            return (
              <FadeIn key={group.id}>
                <article className="rounded-2xl border border-line bg-surface p-5">
                  <div className="mb-4 flex items-center gap-2 text-ink">
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                    <h3 className="font-heading text-lg">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm text-ink transition hover:border-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            )
          })}
        </div>
        <p className="mt-6 font-mono text-xs text-muted">
          Portfolio implementation also uses {portfolioData.portfolioOnlyTech.join(' • ')}{' '}
          — not listed as resume skills.
        </p>
      </div>
    </section>
  )
}

function FilterChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1.5 text-sm transition',
        selected
          ? 'border-accent bg-accent/15 text-ink'
          : 'border-line text-muted hover:text-ink',
      )}
    >
      {children}
    </button>
  )
}
