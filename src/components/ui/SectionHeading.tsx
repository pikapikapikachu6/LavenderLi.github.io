interface Props {
  title: string
}

export default function SectionHeading({ title }: Props) {
  return (
    <h2 className="mb-8 font-mono text-xl font-bold text-primary-600 dark:text-primary-400 md:text-2xl">
      {'// === '}
      {title}
      {' ==='}
    </h2>
  )
}
