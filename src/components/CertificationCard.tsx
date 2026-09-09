import { Award } from 'lucide-react'
import type { Certification } from '../data/portfolio'
import { isPlaceholderUrl } from '../lib/utils'

export function CertificationCard({
  certification,
  onPreview,
}: {
  certification: Certification
  onPreview: (cert: Certification) => void
}) {
  const hasFile = Boolean(certification.certificateFile)
  const hasVerify = !isPlaceholderUrl(certification.credentialUrl)
  const fileIsImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(certification.certificateFile ?? '')

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5">
      <div className="mb-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-line bg-surface-2">
        {hasFile && fileIsImage ? (
          <img
            src={certification.certificateFile}
            alt=""
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
          />
        ) : (
          <Award className="text-muted" size={28} aria-hidden="true" />
        )}
      </div>
      <h3 className="font-heading text-xl text-ink">{certification.title}</h3>
      <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
      {certification.issueDate ? (
        <p className="mt-1 font-mono text-xs text-muted">Issued {certification.issueDate}</p>
      ) : (
        <p className="mt-1 font-mono text-xs text-muted">Issue year not listed</p>
      )}
      {certification.expiryDate ? (
        <p className="font-mono text-xs text-muted">Expires {certification.expiryDate}</p>
      ) : null}
      {certification.credentialId ? (
        <p className="font-mono text-xs text-muted">ID {certification.credentialId}</p>
      ) : null}
      {certification.description ? (
        <p className="mt-3 text-sm leading-6 text-muted">{certification.description}</p>
      ) : null}
      {certification.skills?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <li key={skill} className="rounded-md border border-line px-2 py-1 text-xs text-ink">
              {skill}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {hasVerify ? (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-10 items-center rounded-lg bg-accent px-3 text-sm font-medium text-slate-950"
          >
            Verify Credential
          </a>
        ) : (
          <span className="inline-flex h-10 cursor-not-allowed items-center rounded-lg border border-line px-3 text-sm text-muted opacity-60">
            Verify Credential
          </span>
        )}
        {hasFile && fileIsImage ? (
          <button
            type="button"
            onClick={() => onPreview(certification)}
            className="inline-flex h-10 items-center rounded-lg border border-line px-3 text-sm text-ink"
          >
            View Certificate
          </button>
        ) : hasFile ? (
          <a
            href={certification.certificateFile}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-10 items-center rounded-lg border border-line px-3 text-sm text-ink"
          >
            View Certificate
          </a>
        ) : (
          <span className="inline-flex h-10 cursor-not-allowed items-center rounded-lg border border-line px-3 text-sm text-muted opacity-60">
            View Certificate
          </span>
        )}
      </div>
    </article>
  )
}
