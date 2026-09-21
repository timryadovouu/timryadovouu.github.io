import { profile, socials } from '../data'
import { useLang } from '../i18n'
import { Section } from './Section'

export function Contact() {
  const { t } = useLang()
  return (
    <Section id="contact" title={t.ui.contact}>
      <p className="contact-line">
        {t.ui.email}: <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>

      <ul className="contact-socials">
        {socials.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
