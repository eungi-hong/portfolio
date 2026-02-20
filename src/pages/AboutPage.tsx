import { workExperiences } from '../data/workExperience'

const skills = [
  'Python',
  'Java',
  'Node.js',
  'Swift',
  'TypeScript',
  'JavaScript',
  'SQL',
  'React.js',
  'Firebase',
  'Microsoft Azure',
]

export function AboutPage() {
  return (
    <div>
    <section className="panel about">
      <h2>Work Experience</h2>
      <div className="chip-wrap" aria-label="Technical skills">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>

      <div className="experience-list" aria-label="Internship experience">
        {workExperiences.map((experience) => (
          <article key={experience.company} className="experience-item">
            <h3>
              {experience.title} · {experience.company}
            </h3>
            <p className="experience-meta">
              {experience.period} · {experience.location}
            </p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="chip-wrap">
              {experience.stack.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="why-me" aria-label="Why me">
        <h3>Why Choose Me</h3>
        <div className="why-me-grid">
          <article className="why-me-card">
            <h4>Fast learner</h4>
            <p>
              I have studied in three different countries and excelled in diverse academic environments. I adapt quickly to new environments, teams, and challenges.
            </p>
          </article>
          <article className="why-me-card">
            <h4>Strong technical growth mindset</h4>
            <p>
              I focus on writing clean, maintainable code and quickly picking up new tech stacks.
            </p>
          </article>
          <article className="why-me-card">
            <h4>Clear and reliable communicator</h4>
            <p>
              I value clear communication, proactive updates, and timely delivery so teammates and
              stakeholders can move with confidence.
            </p>
          </article>
        </div>
      </section>
      </div>
  )
}
