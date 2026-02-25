import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import BlogCard from '../blog/BlogCard'
import { getAllPosts } from '../../lib/markdown'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading title="Latest Posts" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 font-mono text-sm text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            View all posts <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
