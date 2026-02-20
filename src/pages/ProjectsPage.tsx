import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <section className="projects-view">
      <div className="panel">
        <p className="eyebrow">Selected Work</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p>{project.summary}</p>
              <div className="chip-wrap">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              {!!project.links?.length && (
                <div className="project-links">
                  {project.links?.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
