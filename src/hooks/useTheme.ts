import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// Кастомный хук: хранит выбранную тему, пишет её в <html data-theme>
// и запоминает в localStorage. Хорошая иллюстрация useState + useEffect.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // ленивая инициализация: читаем сохранённое или системное значение один раз
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
