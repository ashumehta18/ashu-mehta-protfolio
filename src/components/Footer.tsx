import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { isPlaceholderUrl } from '../lib/utils'
import { PlaceholderLink } from './PlaceholderLink'

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-ink">{portfolioData.personal.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            © 2026 Ashu Mehta. Built with React and curiosity.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-3 text-sm">
          {portfolioData.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-muted hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-start gap-2 text-sm">
          <PlaceholderLink
            href={portfolioData.personal.githubUrl}
            missingLabel="GitHub"
            className={footerLink(isPlaceholderUrl(portfolioData.personal.githubUrl))}
          >
            GitHub
          </PlaceholderLink>
          <PlaceholderLink
            href={portfolioData.personal.linkedinUrl}
            missingLabel="LinkedIn"
            className={footerLink(isPlaceholderUrl(portfolioData.personal.linkedinUrl))}
          >
            LinkedIn
          </PlaceholderLink>
          <PlaceholderLink
            href={portfolioData.personal.leetcodeUrl}
            missingLabel="LeetCode"
            className={footerLink(isPlaceholderUrl(portfolioData.personal.leetcodeUrl))}
          >
            LeetCode
          </PlaceholderLink>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-ink">
            Email
          </a>
          <button
            type="button"
            className="mt-2 inline-flex items-center gap-1 text-sm text-accent"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

function footerLink(disabled: boolean) {
  return disabled ? 'cursor-not-allowed text-muted opacity-50' : 'text-ink hover:text-accent'
}
