import { useLang } from '../i18n'
import { Section } from './Section'

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

            {/* ссылка показывается только если она есть — условный рендеринг */}
            {p.link && (
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                {t.ui.open}
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
