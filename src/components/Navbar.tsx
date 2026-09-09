import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { portfolioData } from '../data/portfolio'
import { cn, isPlaceholderUrl } from '../lib/utils'
import { PlaceholderLink } from './PlaceholderLink'
import { ThemeToggle } from './ThemeToggle'

const SECTION_IDS = portfolioData.nav.map((item) => item.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function goTo(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/75 backdrop-blur-xl">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="min-w-0">
          <p className="font-heading text-base font-semibold text-ink">{portfolioData.personal.name}</p>
          <p className="hidden text-xs text-muted sm:block">{portfolioData.personal.role}</p>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {portfolioData.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-md px-2.5 py-1.5 text-sm transition',
                active === item.id ? 'bg-surface-2 text-ink' : 'text-muted hover:text-ink',
              )}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PlaceholderLink
            href={portfolioData.personal.githubUrl}
            missingLabel="GitHub"
            className={cn(
              'hidden h-10 w-10 items-center justify-center rounded-lg border border-line sm:inline-flex',
              isPlaceholderUrl(portfolioData.personal.githubUrl)
                ? 'cursor-not-allowed opacity-45'
                : 'hover:border-accent text-ink',
            )}
          >
            <GithubIcon size={18} />
            <span className="sr-only">GitHub</span>
          </PlaceholderLink>
          <PlaceholderLink
            href={portfolioData.personal.linkedinUrl}
            missingLabel="LinkedIn"
            className={cn(
              'hidden h-10 w-10 items-center justify-center rounded-lg border border-line sm:inline-flex',
              isPlaceholderUrl(portfolioData.personal.linkedinUrl)
                ? 'cursor-not-allowed opacity-45'
                : 'hover:border-accent text-ink',
            )}
          >
            <LinkedinIcon size={18} />
            <span className="sr-only">LinkedIn</span>
          </PlaceholderLink>
          {isPlaceholderUrl(portfolioData.personal.resumeUrl) ? (
            <span
              className="hidden cursor-not-allowed rounded-lg border border-line px-3 py-2 text-sm text-muted opacity-60 md:inline-flex"
              title="Add resumeUrl in src/data/portfolio.ts"
            >
              Resume
            </span>
          ) : (
            <a
              href={portfolioData.personal.resumeUrl}
              className="hidden rounded-lg bg-accent px-3 py-2 text-sm font-medium text-slate-950 md:inline-flex dark:text-slate-950"
            >
              Resume
            </a>
          )}
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-canvas px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {portfolioData.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className="rounded-lg px-3 py-3 text-left text-base text-ink"
                onClick={() => goTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            {isPlaceholderUrl(portfolioData.personal.resumeUrl) ? (
              <span className="px-3 py-3 text-sm text-muted">Resume URL not added yet</span>
            ) : (
              <a href={portfolioData.personal.resumeUrl} className="px-3 py-3 text-ink">
                Download Resume
              </a>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
