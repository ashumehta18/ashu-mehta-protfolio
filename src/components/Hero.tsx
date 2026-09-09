import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { isPlaceholderUrl } from '../lib/utils'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase sm:text-[13px]">
            {portfolioData.hero.eyebrow}
          </p>
          <h1 className="font-heading mt-4 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            {portfolioData.hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink/90">{portfolioData.hero.tagline}</p>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">
            {portfolioData.hero.paragraph}
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted">{portfolioData.hero.supporting}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-slate-950"
            >
              View My Projects
            </a>
            {isPlaceholderUrl(portfolioData.personal.resumeUrl) ? (
              <span
                className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-xl border border-line px-5 text-sm text-muted opacity-70"
                title="Add resumeUrl in src/data/portfolio.ts"
              >
                Download Resume
              </span>
            ) : (
              <a
                href={portfolioData.personal.resumeUrl}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-line px-5 text-sm font-medium text-ink"
              >
                Download Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent"
            >
              Let’s Connect
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          aria-label="Engineering profile snapshot"
          className="glass rounded-2xl p-4 sm:p-5"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
            Profile snapshot — not a live terminal
          </p>
          <div className="mt-3 overflow-hidden rounded-xl border border-line bg-canvas font-mono text-[13px] leading-6 text-muted">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500/40" />
              <span className="ml-2 text-xs">ashu-mehta / profile</span>
            </div>
            <pre className="overflow-x-auto p-4 text-ink/90">
{`$ whoami
ashu-mehta

$ focus
full-stack development
backend systems
cloud technologies

$ stack
React • Node.js • MongoDB • AWS`}
            </pre>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {portfolioData.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-line bg-surface-2 px-3 py-3">
                <p className="font-mono text-lg text-ink">{stat.value}</p>
                <p className="mt-1 text-xs leading-4 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <ArchitectureStrip />
        </motion.aside>
      </div>
    </section>
  )
}

function ArchitectureStrip() {
  const nodes = ['Frontend', 'Backend', 'Database', 'Cloud']
  return (
    <div className="mt-4 rounded-xl border border-line bg-surface-2 px-3 py-3">
      <p className="font-mono text-[11px] tracking-widest text-muted uppercase">System path</p>
      <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink">
        {nodes.map((node, index) => (
          <li key={node} className="flex items-center gap-2">
            <span className="rounded-md border border-line bg-surface px-2 py-1">{node}</span>
            {index < nodes.length - 1 ? (
              <span className="hidden text-accent sm:inline" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
