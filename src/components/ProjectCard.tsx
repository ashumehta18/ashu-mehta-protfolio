import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../data/portfolio'
import { cn, isPlaceholderUrl } from '../lib/utils'
import { PlaceholderLink } from './PlaceholderLink'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/50">
      <div className="relative min-h-[180px] border-b border-line bg-surface-2 p-4" aria-hidden="true">
        {project.id === 'eventra' ? <EventraMock /> : <FreshRushMock />}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">{project.subtitle}</p>
        <h3 className="font-heading mt-2 text-2xl text-ink">{project.name}</h3>
        {project.role ? (
          <p className="mt-1 text-sm text-muted">Role: {project.role}</p>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-canvas px-2 py-1 font-mono text-xs text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {project.highlights.slice(0, 4).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent/10 px-2 py-1 text-xs text-ink">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <PlaceholderLink
            href={project.githubUrl}
            missingLabel="GitHub"
            className={linkClass(isPlaceholderUrl(project.githubUrl))}
          >
            <GithubIcon size={16} />
            View GitHub
          </PlaceholderLink>
          <PlaceholderLink
            href={project.liveUrl}
            missingLabel="Live demo"
            className={linkClass(isPlaceholderUrl(project.liveUrl))}
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live Demo
          </PlaceholderLink>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-slate-950"
          >
            Case study
          </button>
        </div>
      </div>
    </article>
  )
}

function linkClass(disabled: boolean) {
  return cn(
    'inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-line px-4 text-sm',
    disabled ? 'cursor-not-allowed opacity-50' : 'text-ink hover:border-accent',
  )
}

function EventraMock() {
  return (
    <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-3">
      <div className="rounded-xl border border-line bg-canvas p-3">
        <div className="h-2 w-16 rounded bg-accent/50" />
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 rounded-md border border-line bg-surface" />
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-dashed border-line bg-canvas p-3">
        <div className="mx-auto mt-2 h-16 w-16 rounded-md border border-accent/40" />
        <p className="mt-3 text-center font-mono text-[10px] text-muted">QR check-in</p>
      </div>
    </div>
  )
}

function FreshRushMock() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex gap-2">
        <div className="h-10 flex-1 rounded-lg border border-line bg-canvas" />
        <div className="h-10 w-16 rounded-lg bg-accent/30" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {['7d', '15d', '30d'].map((plan) => (
          <div key={plan} className="rounded-lg border border-line bg-canvas p-2">
            <p className="font-mono text-[10px] text-muted">plan</p>
            <p className="text-sm text-ink">{plan}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
