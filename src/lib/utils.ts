export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ')
}

export function isPlaceholderUrl(url?: string): boolean {
  if (!url) return true
  const trimmed = url.trim()
  return trimmed === '' || trimmed === '#'
}

export function formatMailto({
  to,
  name,
  email,
  message,
}: {
  to: string
  name: string
  email: string
  message: string
}): string {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
  const body = encodeURIComponent(
    `${message}\n\n—\n${name}\n${email}`,
  )
  return `mailto:${to}?subject=${subject}&body=${body}`
}
