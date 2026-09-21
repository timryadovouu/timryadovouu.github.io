import { useLang } from '../i18n'
import { Slider } from './Slider'

// Слайдер языка: слева EN, справа RU.
export function LangSlider() {
  const { lang, toggle } = useLang()
  return (
    <Slider
      left="EN"
      right="RU"
      side={lang === 'en' ? 'left' : 'right'}
      onChange={(target) => {
        const targetLang = target === 'left' ? 'en' : 'ru'
        if (targetLang !== lang) toggle()
      }}
      ariaLabel="Язык / Language: EN — RU"
    />
  )
}
