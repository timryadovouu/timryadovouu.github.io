import { useLang } from '../i18n'
import { Section } from './Section'

export function About() {
  const { t } = useLang()
  return (
    <Section id="about" title={t.ui.about}>
      {t.about.map((paragraph, i) => (
        <p key={i} className="about-text">
          {paragraph}
        </p>
      ))}
    </Section>
  )
}
