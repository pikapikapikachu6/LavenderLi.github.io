import { GraduationCap, User } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading title="About Me" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border-light bg-surface-card-light p-6 dark:border-border-dark dark:bg-surface-card-dark">
            <div className="mb-4 flex items-center gap-2 text-primary-600 dark:text-primary-400">
              <User size={20} />
              <h3 className="font-mono font-semibold">whoami</h3>
            </div>
            <p className="leading-relaxed text-text-muted-light dark:text-text-muted-dark">
              Hi, I'm Lavender Li — a recent Master of Computing graduate from the Australian National University with hands-on experience in software development, testing, and system deployment.
            </p>

            <p className="leading-relaxed text-text-muted-light dark:text-text-muted-dark mt-4">
              I have worked in Agile environments performing both manual and automated testing, deploying applications using Docker and Kubernetes, and validating CI/CD pipelines from commit to production.
            </p>

            <p className="leading-relaxed text-text-muted-light dark:text-text-muted-dark mt-4">
              Through academic and production projects, I have built secure messaging platforms, authentication services, and data-driven analytics tools, focusing on reliability, scalability, and maintainability.
            </p>

            <p className="leading-relaxed text-text-muted-light dark:text-text-muted-dark mt-4">
              I am interested in graduate and junior software engineering roles where I can contribute to building high-quality systems and continue growing as an engineer. </p>
            </div>
          <div className="rounded-lg border border-border-light bg-surface-card-light p-6 dark:border-border-dark dark:bg-surface-card-dark">
            <div className="mb-4 flex items-center gap-2 text-primary-600 dark:text-primary-400">
              <GraduationCap size={20} />
              <h3 className="font-mono font-semibold">Education</h3>
            </div>
            <div>
              <div>
                <h3 className="font-semibold text-lg">Master of Computing (Computer Systems)</h3>
                <p>Australian National University · Graduated Dec 2025</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">Master of Financial Management</h3>
                <p>Australian National University · Graduated Dec 2023</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">Bachelor of Computing (Software Development)</h3>
                <p>University of Sydney · Graduated Dec 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
