import { useMemo, useState } from 'react'
import { portfolioData, type Project, type ProjectCategory } from '../data/portfolio'
import { cn, isPlaceholderUrl } from '../lib/utils'
import { FadeIn } from './FadeIn'
import { Modal } from './Modal'
import { PlaceholderLink } from './PlaceholderLink'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

type Filter = 'All' | ProjectCategory

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const projects = useMemo(() => {
    if (filter === 'All') return portfolioData.projects
    return portfolioData.projects.filter((project) =>
      project.categories.some((category) => category === filter),
    )
  }, [filter])

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Product-focused engineering work with real-world impact."
          description="Three featured full-stack projects built around practical workflows, secure systems, and user-centered product thinking. GitHub repositories are available for FreshRush and CampusIQ; live demo links remain disabled until deployed URLs are added."
        />
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {portfolioData.projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-sm',
                filter === item
                  ? 'border-accent bg-accent/15 text-ink'
                  : 'border-line text-muted hover:text-ink',
              )}
            >
              {item}
            </button>
          ))}
        </div>
        {projects.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line p-8 text-sm text-muted">
            No projects tagged “{filter}” yet. This filter does not remove projects from the data
            file — choose All to see featured work.
          </p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.06}>
                <ProjectCard project={project} onOpen={setSelected} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      <Modal
        open={Boolean(selected)}
        title={selected?.name ?? 'Project'}
        onClose={() => setSelected(null)}
      >
        {selected ? <ProjectDetails project={selected} /> : null}
      </Modal>
    </section>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div>
      <p className="text-sm text-muted">{project.subtitle}</p>
      {project.role ? <p className="mt-1 text-sm text-ink">Role: {project.role}</p> : null}
      <p className="mt-4 leading-7 text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-md border border-line px-2 py-1 font-mono text-xs">
            {tech}
          </li>
        ))}
      </ul>
      <h4 className="mt-6 font-heading text-lg text-ink">Engineering highlights</h4>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-line bg-surface-2 p-4">
        <p className="text-sm text-ink">
          <span className="font-medium">Challenge: </span>
          {project.challenge}
        </p>
        <p className="mt-3 text-sm text-muted">
          <span className="font-medium text-ink">Engineering response: </span>
          {project.engineeringResponse}
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <PlaceholderLink
          href={project.githubUrl}
          missingLabel="GitHub"
          className={isPlaceholderUrl(project.githubUrl)
            ? 'inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-line px-4 text-sm opacity-50'
            : 'inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-line px-4 text-sm text-ink'}
        >
          <GithubIcon size={16} />
          View GitHub
        </PlaceholderLink>
        <PlaceholderLink
          href={project.liveUrl}
          missingLabel="Live demo"
          className={isPlaceholderUrl(project.liveUrl)
            ? 'inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-line px-4 text-sm opacity-50'
            : 'inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-line px-4 text-sm text-ink'}
        >
          <ExternalLink size={16} aria-hidden="true" />
          Live Demo
        </PlaceholderLink>
      </div>
    </div>
  )
}
