import { useEffect, useState } from 'react'
import { profile } from '../data'
import { useLang } from '../i18n'
import { LangSlider } from './LangSlider'

// Разделы, на которые ведёт навигация (id секций на странице)
const SECTIONS = ['about', 'experience', 'projects', 'resume', 'contact'] as const
type SectionId = (typeof SECTIONS)[number]

// инициалы из имени: "tim ryadovoi" -> "tr"
const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')

// Верхняя панель: инициалы слева, ссылки на разделы и язык справа.
// Подсвечивает раздел, который сейчас на экране.
export function Nav() {
  const { t } = useLang()
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    // «текущий» раздел — тот, что пересекает полосу в верхней трети экрана
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id as SectionId)
        }
      },
      { rootMargin: '-30% 0px -65% 0px' },
    )
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#" aria-label={profile.name}>
          {initials}
        </a>

        <div className="nav-right">
          <ul className="nav-links">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'active' : undefined}>
                  {t.ui[id]}
                </a>
              </li>
            ))}
          </ul>
          <LangSlider />
        </div>
      </div>
    </nav>
  )
}
