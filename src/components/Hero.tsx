import { profile } from '../data'
import { useLang } from '../i18n'

// Первый экран: имя, подзаголовок, город. Ссылки — в секции «Контакты».
export function Hero() {
  const { t } = useLang()
  return (
    <header className="hero">
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{t.tagline}</p>
      <p className="hero-location">{t.location}</p>
    </header>
  )
}
