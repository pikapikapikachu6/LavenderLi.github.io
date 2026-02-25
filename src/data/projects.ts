export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Messaging System',
    description:
      'A secure full-stack messaging and discussion platform with role-based authentication, input validation, and session management to ensure user privacy and data integrity. Built using Vue 3 and Tailwind CSS for the frontend and Flask REST APIs for the backend.',
    tags: ['Vue 3', 'Flask', 'REST API', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/pikapikapikachu6/Messaging',
  },
  {
    title: 'Aauth – Authentication Service',
    description:
      'A universal authentication service supporting multi-platform logins (GitHub, DingTalk, QQ, SMS). Implements JWT (PS256) token-based authentication with RSA key rotation and strict origin validation for enhanced security.',
    tags: ['Authentication', 'JWT', 'RSA', 'Security', 'JavaScript'],
    github: 'https://github.com/yzITI/aauth-web', 
  },
  {
    title: 'XYZSAS – Student Affairs System',
    description:
      'A production student affairs management system deployed at Yangzhou High School. Developed course selection module using Node.js and Vue 3, deployed on Aliyun cloud with Docker and GitHub Actions CI/CD workflow.',
    tags: ['Node.js', 'Vue 3', 'Docker', 'CI/CD', 'MongoDB'],
    github: 'https://github.com/xyzsas',
  },
  {
    title: 'Bushfire Risk Analysis',
    description:
      'A data-driven bushfire risk prediction tool integrating historical weather, vegetation, and fire incident datasets. Applied SQL optimization (35% performance improvement) and developed visualization dashboards with geospatial heatmaps.',
    tags: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
    github: 'https://github.com/pikapikapikachu6/Bushfire-Risk-Analysis', 
  },
];