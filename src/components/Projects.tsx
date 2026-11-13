import { useLang } from '../i18n'
import { Section } from './Section'
import { GitHubIcon, GlobeIcon } from './icons'

export function Projects() {
  const { t } = useLang()
  return (
    <Section id="projects" title={t.ui.projects}>
      <div className="project-grid">
        {t.projects.map((p) => (
          <article key={p.title} className="project-card">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            <ul className="project-tags">
              {p.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            {/* ссылки показываются только если они есть — условный рендеринг */}
            {(p.link || p.demo) && (
              <div className="icon-links">
                {p.link && (
                  <a className="icon-link" href={p.link} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                    {t.ui.code}
                  </a>
                )}
                {p.demo && (
                  <a className="icon-link" href={p.demo} target="_blank" rel="noreferrer">
                    <GlobeIcon />
                    {t.ui.demo}
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
