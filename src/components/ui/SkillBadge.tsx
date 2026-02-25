interface Props {
  name: string
}

export default function SkillBadge({ name }: Props) {
  return (
    <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
      {name}
    </span>
  )
}
