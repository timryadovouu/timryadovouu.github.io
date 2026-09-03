import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type Lang, type SiteContent } from './data'

// Контекст языка: хранит текущий язык, умеет переключать и отдаёт
// готовый переведённый контент `t`. Пример React Context + хука.
interface LangContextValue {
  lang: Lang
  toggle: () => void
  t: SiteContent // контент для текущего языка
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    return saved ?? 'ru'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang // <html lang="..."> для доступности/SEO
  }, [lang])

  const toggle = () => setLang((l) => (l === 'ru' ? 'en' : 'ru'))

  return (
    <LangContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

// Хук-обёртка: бросает понятную ошибку, если забыли LanguageProvider.
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang должен использоваться внутри <LanguageProvider>')
  return ctx
}
