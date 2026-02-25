export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C', 'R', 'Pascal'],
  },
  {
    name: 'Frameworks',
    skills: ['Vue', 'Flask', 'Node.js', 'React', 'Tailwind CSS'],
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'Linux', 'GitHub Actions', 'REST APIs', 'JWT'],
  },
  {
    name: 'Testing & QA',
    skills: ['JUnit', 'Jest', 'Postman', 'Unit Testing', 'Agile/Scrum'],
  },
]
