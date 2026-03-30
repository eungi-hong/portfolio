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
      'Contributed to the development of an LLM-driven patient-clinician interaction product in a pre-seed medtech startup environment.',
      'Designed and ran Quality Assurance tests using ambiguous real-world scenarios to evaluate response quality.',
      'Participated in product discussions with founders and partnership meetings with local and international health-care stakeholders.',
      'Future work will span designing and refining back-end services, cloud infrastructure optimization, and delivery work with public health institutions.',
    ],
  },
  {
    company: 'Nexon Korea',
    title: 'Software Engineer Intern',
    period: 'Dec 2025 - Jan 2026',
    location: 'Seoul, South Korea',
    stack: ['React.js', 'TypeScript', 'JavaScript', 'CSS', 'Prisma ORM', 'GitLab'],
    highlights: [
      'Implemented end-to-end features in TypeScript for Nexon Youth Programming Challenge (NYPC) web platform serving 4,000+ participants.',
    ],
  },
]
