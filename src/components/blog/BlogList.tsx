import BlogCard from './BlogCard'
import { getAllPosts } from '../../lib/markdown'

export default function BlogList() {
  const posts = getAllPosts()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
      {posts.length === 0 && (
        <p className="col-span-full text-center font-mono text-text-muted-light dark:text-text-muted-dark">
          {'// No posts yet. Check back soon!'}
        </p>
      )}
    </div>
  )
}
