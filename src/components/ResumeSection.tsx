import { resumes } from '../data'
import { useLang } from '../i18n'
import { Section } from './Section'

// Кнопки скачивания резюме. PDF-файлы лежат в public/ и попадают
// в корень собранного сайта, поэтому href начинается со слэша.
export function ResumeSection() {
  const { t } = useLang()
  return (
    <Section id="resume" title={t.ui.resume}>
      <div className="resume-buttons">
        {resumes.map((r) => (
          <a key={r.href} className="resume-btn" href={r.href} target="_blank" rel="noreferrer">
            {r.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
