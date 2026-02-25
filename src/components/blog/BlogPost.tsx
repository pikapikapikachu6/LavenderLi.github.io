import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import type { BlogPost as BlogPostType } from '../../types/blog'

interface Props {
  post: BlogPostType
}

export default function BlogPost({ post }: Props) {
  return (
    <article>
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">{post.title}</h1>
        <div className="flex items-center gap-4">
          <time className="font-mono text-sm text-text-muted-light dark:text-text-muted-dark">
            {post.date}
          </time>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
