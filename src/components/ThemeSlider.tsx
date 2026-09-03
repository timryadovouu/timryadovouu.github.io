import { useTheme } from '../hooks/useTheme'
import { Slider } from './Slider'

// Слайдер темы: слева ☀️ (светлая), справа 🌙 (тёмная).
export function ThemeSlider() {
  const { theme, toggle } = useTheme()
  return (
    <Slider
      left="☀️"
      right="🌙"
      side={theme === 'light' ? 'left' : 'right'}
      onChange={(target) => {
        const targetTheme = target === 'left' ? 'light' : 'dark'
        if (targetTheme !== theme) toggle()
      }}
      ariaLabel="Тема / Theme: светлая — тёмная"
    />
  )
}
