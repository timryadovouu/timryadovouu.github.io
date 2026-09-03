import { profile, socials } from '../data'
import { useLang } from '../i18n'

// Первый экран: имя, подзаголовок, быстрые ссылки на соцсети.
export function Hero() {
  const { t } = useLang()
  return (
    <header className="hero">
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{t.tagline}</p>
      <p className="hero-location">{t.location}</p>

      <nav className="hero-links">
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`}>{t.ui.email}</a>
      </nav>
    </header>
  )
}
