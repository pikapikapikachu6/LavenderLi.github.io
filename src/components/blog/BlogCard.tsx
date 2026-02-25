import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import type { BlogPost } from '../../types/blog'

interface Props {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border-light bg-surface-card-light p-6 transition-all hover:border-primary-500 hover:shadow-lg dark:border-border-dark dark:bg-surface-card-dark dark:hover:border-primary-400"
    >
      <div className="mb-2 flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark">
        <Calendar size={14} />
        <time>{post.date}</time>
      </div>
      <h3 className="mb-2 font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
        {post.title}
      </h3>
      <p className="mb-3 text-sm text-text-muted-light line-clamp-2 dark:text-text-muted-dark">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-1">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="rounded bg-primary-100 px-2 py-0.5 text-xs text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
