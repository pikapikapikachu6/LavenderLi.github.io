import SectionHeading from '../components/ui/SectionHeading'
import BlogList from '../components/blog/BlogList'

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
      <SectionHeading title="Blog" />
      <BlogList />
    </div>
  )
}
