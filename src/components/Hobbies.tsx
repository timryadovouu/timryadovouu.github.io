import { useLang } from '../i18n'
import { Section } from './Section'

export function Hobbies() {
  const { t } = useLang()
  return (
    <Section id="hobbies" title={t.ui.hobbies}>
      <ul className="hobby-list">
        {t.hobbies.map((h) => (
          <li key={h} className="hobby-chip">
            {h}
          </li>
        ))}
      </ul>
    </Section>
  )
}
