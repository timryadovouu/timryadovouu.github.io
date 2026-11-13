import { profile, socials } from '../data'
import { useLang } from '../i18n'
import { Section } from './Section'
import { GitHubIcon, MailIcon, TelegramIcon } from './icons'

const socialIcons = {
  github: GitHubIcon,
  telegram: TelegramIcon,
}

export function Contact() {
  const { t } = useLang()
  return (
    <Section id="contact" title={t.ui.contact}>
      <div className="icon-links">
        <a className="icon-link" href={`mailto:${profile.email}`}>
          <MailIcon />
          {profile.email}
        </a>
        {socials.map((s) => {
          const Icon = socialIcons[s.icon]
          return (
            <a key={s.href} className="icon-link" href={s.href} target="_blank" rel="noreferrer">
              <Icon />
              {s.label}
            </a>
          )
        })}
      </div>
    </Section>
  )
}
