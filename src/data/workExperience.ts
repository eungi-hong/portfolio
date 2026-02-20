export type WorkExperience = {
  company: string
  title: string
  period: string
  location: string
  stack: string[]
  highlights: string[]
}

export const workExperiences: WorkExperience[] = [
  {
    company: 'Marymount Labs',
    title: 'Software Engineer Intern',
    period: 'Feb 2026 - Jun 2026',
    location: 'Singapore, Singapore',
    stack: ['Python', 'Microsoft Azure'],
    highlights: [
      'Designed and refined backend services and API integrations for production workflows.',
      'Supported database management and cloud infrastructure optimization initiatives.',
    ],
  },
  {
    company: 'Nexon Korea',
    title: 'Software Engineer Intern',
    period: 'Dec 2025 - Jan 2026',
    location: 'Seoul, South Korea',
    stack: ['React.js', 'TypeScript', 'JavaScript', 'CSS', 'Prisma ORM', 'GitLab'],
    highlights: [
      'Implemented frontend features for the Nexon Youth Programming Challenge (NYPC) web platform serving 4,000+ participants.',
      'Integrated REST APIs and extended backend APIs to support real-time admin-side updates with Prisma ORM.',
    ],
  },
]
