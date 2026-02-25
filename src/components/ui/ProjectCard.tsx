import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col rounded-lg border border-border-light bg-surface-card-light p-6 transition-shadow hover:shadow-lg dark:border-border-dark dark:bg-surface-card-dark">
      <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
      <p className="mb-4 flex-1 text-sm text-text-muted-light dark:text-text-muted-dark">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-muted-light transition-colors hover:text-primary-600 dark:text-text-muted-dark dark:hover:text-primary-400"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-muted-light transition-colors hover:text-primary-600 dark:text-text-muted-dark dark:hover:text-primary-400"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  )
}
