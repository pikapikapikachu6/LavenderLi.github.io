import { Github, Linkedin, Mail } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { socialLinks } from '../../data/social'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <SectionHeading title="Contact" />
        <p className="mb-8 text-text-muted-light dark:text-text-muted-dark">
          Feel free to reach out — I'm always open to new opportunities and conversations.
        </p>
        <div className="flex justify-center gap-6">
          {socialLinks.map(link => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-light bg-surface-card-light transition-all hover:border-primary-500 hover:text-primary-600 dark:border-border-dark dark:bg-surface-card-dark dark:hover:border-primary-400 dark:hover:text-primary-400"
                aria-label={link.name}
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
