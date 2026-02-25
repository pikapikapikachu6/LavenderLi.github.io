import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
