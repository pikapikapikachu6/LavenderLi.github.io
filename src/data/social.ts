export interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'mail'
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/pikapikapikachu6',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shutong-li-464b07201/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:lishutong0613@gmail.com',
    icon: 'mail',
  },
]
