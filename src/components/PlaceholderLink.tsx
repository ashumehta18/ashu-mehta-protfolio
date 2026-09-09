import type { ReactNode } from 'react'
import { isPlaceholderUrl } from '../lib/utils'

interface PlaceholderLinkProps {
  href?: string
  children: ReactNode
  className?: string
  missingLabel: string
}

export function PlaceholderLink({
  href,
  children,
  className,
  missingLabel,
}: PlaceholderLinkProps) {
  if (isPlaceholderUrl(href)) {
    return (
      <span
        className={className}
        title={`${missingLabel} — add the URL in src/data/portfolio.ts`}
        aria-disabled="true"
      >
        {children}
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
    </a>
  )
}
