import { useLang } from '../i18n'
import { Section } from './Section'

export function Education() {
  const { t } = useLang()
  return (
    <Section id="education" title={t.ui.education}>
      <div className="edu-list">
        {t.education.map((e) => (
          <article key={e.org} className="edu-item">
            <div className="edu-head">
              <h3 className="edu-org">{e.org}</h3>
              <span className="edu-period">{e.period}</span>
            </div>
            <p className="edu-degree">{e.degree}</p>
            <p className="edu-place">{e.place}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
