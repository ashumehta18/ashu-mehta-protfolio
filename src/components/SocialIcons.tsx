import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Base({ size = 18, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={props['aria-hidden'] ?? true}
      {...props}
    >
      {children}
    </svg>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.2-.4 6.6-1.6 6.6-7.2a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.8s-1.2-.4-4 1.5a13.4 13.4 0 0 0-7 0c-2.8-1.9-4-1.5-4-1.5a5.2 5.2 0 0 0-.1 3.8 5.6 5.6 0 0 0-1.5 3.9c0 5.6 3.4 6.8 6.6 7.2a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.5 1.5-4.5-2.2-6-2.5" />
    </Base>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Base>
  )
}
