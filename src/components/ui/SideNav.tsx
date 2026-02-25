import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function SideNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const midY = window.innerHeight / 2
      let closest = sections[0].id
      let minDist = Infinity

      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - midY)
        if (dist < minDist) {
          minDist = dist
          closest = s.id
        }
      }

      setActive(closest)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex">
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-3"
          aria-label={s.label}
        >
          <span
            className={`text-xs font-mono opacity-0 transition-opacity group-hover:opacity-100 ${
              active === s.id
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-text-muted-light dark:text-text-muted-dark'
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all ${
              active === s.id
                ? 'h-3 w-3 bg-primary-500'
                : 'h-2 w-2 bg-text-muted-light/40 group-hover:bg-primary-400 dark:bg-text-muted-dark/40'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
