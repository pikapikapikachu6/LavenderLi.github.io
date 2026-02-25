import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

const sectionLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    setMobileOpen(false)

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const btnClass =
    'text-sm font-medium text-text-muted-light transition-colors hover:text-primary-600 dark:text-text-muted-dark dark:hover:text-primary-400 cursor-pointer bg-transparent border-none p-0'
  const linkClass =
    'text-sm font-medium text-text-muted-light transition-colors hover:text-primary-600 dark:text-text-muted-dark dark:hover:text-primary-400'

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border-light bg-surface-card-light/80 backdrop-blur-md dark:border-border-dark dark:bg-surface-card-dark/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="font-mono text-lg font-bold text-primary-600 dark:text-primary-400">
          {'Lavender Li'}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {sectionLinks.map(link => (
            <button key={link.label} onClick={() => scrollToSection(link.id)} className={btnClass}>
              {link.label}
            </button>
          ))}
          <Link to="/blog" className={linkClass}>
            Blog
          </Link>
          <button onClick={() => scrollToSection('contact')} className={btnClass}>
            Contact
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-surface-card-light px-4 py-4 dark:border-border-dark dark:bg-surface-card-dark md:hidden">
          {sectionLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className={`${btnClass} block w-full py-2 text-left`}
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className={`${linkClass} block py-2`}
          >
            Blog
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className={`${btnClass} block w-full py-2 text-left`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}
