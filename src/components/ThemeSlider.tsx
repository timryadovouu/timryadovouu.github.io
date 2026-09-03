import { useTheme } from "../hooks/useTheme";
import { Slider } from "./Slider";

// Слайдер темы: слева 🌙 (тёмная), справа ☀️ (светлая).
export function ThemeSlider() {
  const { theme, toggle } = useTheme();
  return (
    <Slider
      left="🌙"
      right="☀️"
      side={theme === "dark" ? "left" : "right"}
      onChange={(target) => {
        const targetTheme = target === "left" ? "dark" : "light";
        if (targetTheme !== theme) toggle();
      }}
      ariaLabel="Тема / Theme: светлая — тёмная"
    />
  );
}
