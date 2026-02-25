import SectionHeading from '../ui/SectionHeading'
import SkillBadge from '../ui/SkillBadge'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map(cat => (
            <div
              key={cat.name}
              className="rounded-lg border border-border-light bg-surface-card-light p-6 dark:border-border-dark dark:bg-surface-card-dark"
            >
              <h3 className="mb-3 font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                {`// ${cat.name}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
