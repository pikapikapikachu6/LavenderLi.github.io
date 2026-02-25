export default function Footer() {
  return (
    <footer className="border-t border-border-light py-8 dark:border-border-dark">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="font-mono text-sm text-text-muted-light dark:text-text-muted-dark">
          {'// Built with React + Vite + Tailwind CSS'}
        </p>
        <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">
          &copy; {new Date().getFullYear()} Lavender Li. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
