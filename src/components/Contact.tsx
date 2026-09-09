import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { portfolioData } from '../data/portfolio'
import { formatMailto, isPlaceholderUrl } from '../lib/utils'
import { PlaceholderLink } from './PlaceholderLink'
import { SectionHeading } from './SectionHeading'

interface FormValues {
  name: string
  email: string
  message: string
  company: string
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { name: '', email: '', message: '', company: '' },
  })

  function onSubmit(values: FormValues) {
    if (values.company) return
    setStatus('loading')
    try {
      const href = formatMailto({
        to: portfolioData.personal.email,
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      })
      window.location.href = href
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={portfolioData.contact.heading}
            description={portfolioData.contact.supporting}
          />
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 text-ink"
              >
                <Mail size={16} aria-hidden="true" />
                {portfolioData.personal.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2 text-ink"
              >
                <Phone size={16} aria-hidden="true" />
                {portfolioData.personal.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-ink">
              <MapPin size={16} aria-hidden="true" />
              {portfolioData.personal.location}
            </li>
            <li className="flex flex-wrap gap-3 pt-2">
              <SocialChip href={portfolioData.personal.linkedinUrl} label="LinkedIn">
                <LinkedinIcon size={16} />
                LinkedIn
              </SocialChip>
              <SocialChip href={portfolioData.personal.githubUrl} label="GitHub">
                <GithubIcon size={16} />
                GitHub
              </SocialChip>
              <SocialChip href={portfolioData.personal.leetcodeUrl} label="LeetCode">
                LeetCode
              </SocialChip>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-line bg-surface p-5 sm:p-6"
          noValidate
        >
          <p className="mb-4 text-sm text-muted">
            This form opens your email client. Messages are not sent to a server.
          </p>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" tabIndex={-1} autoComplete="off" {...register('company')} />
          </div>
          <Field label="Name" htmlFor="name" error={errors.name?.message} required>
            <input
              id="name"
              autoComplete="name"
              className={inputClass}
              {...register('name', { required: 'Name is required.' })}
            />
          </Field>
          <Field label="Email" htmlFor="email" error={errors.email?.message} required>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address.',
                },
              })}
            />
          </Field>
          <Field label="Message" htmlFor="message" error={errors.message?.message} required>
            <textarea
              id="message"
              rows={5}
              className={inputClass}
              {...register('message', {
                required: 'Message is required.',
                minLength: { value: 12, message: 'Please write a short message.' },
              })}
            />
          </Field>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-slate-950 disabled:opacity-70"
          >
            {status === 'loading' ? 'Opening email…' : 'Send via email'}
          </button>
          {status === 'success' ? (
            <p className="mt-3 text-sm text-ink" role="status">
              Your email client should open. If it does not, email {portfolioData.personal.email}.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="mt-3 text-sm text-red-400" role="alert">
              Could not open the email client. Email {portfolioData.personal.email} directly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

const inputClass =
  'mt-1 w-full rounded-lg border border-line bg-canvas px-3 py-2.5 text-sm text-ink'

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            {' '}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SocialChip({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <PlaceholderLink
      href={href}
      missingLabel={label}
      className={
        isPlaceholderUrl(href)
          ? 'inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm opacity-50'
          : 'inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-ink hover:border-accent'
      }
    >
      {children}
    </PlaceholderLink>
  )
}
