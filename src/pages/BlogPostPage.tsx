import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import BlogPostComponent from '../components/blog/BlogPost'
import { getPostBySlug } from '../lib/markdown'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16 text-center">
        <h1 className="mb-4 font-mono text-2xl font-bold">{'// 404 — Post Not Found'}</h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 dark:text-primary-400"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-16">
      <Link
        to="/blog"
        className="mb-6 inline-flex items-center gap-1 font-mono text-sm text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft size={16} /> Back to blog
      </Link>
      <BlogPostComponent post={post} />
    </div>
  )
}
