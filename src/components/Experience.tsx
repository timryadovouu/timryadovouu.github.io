import { useLang } from '../i18n'
import { Section } from './Section'

export function Experience() {
  const { t } = useLang()
  return (
    <Section id="experience" title={t.ui.experience}>
      <div className="exp-list">
        {t.experience.map((job) => (
          <article key={job.org + job.role} className="exp-item">
            <div className="exp-head">
              <h3 className="exp-role">
                {job.role} · {job.org}
              </h3>
              <span className="exp-period">{job.period}</span>
            </div>
            <p className="exp-place">{job.place}</p>

            <ul className="exp-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
