# timryadovouu.github.io

Личный сайт-визитка. Одна прокручиваемая страница на **Vite + React + TypeScript**,
двуязычная (EN/RU), со светлой и тёмной темой. Опубликована на GitHub Pages:
**https://timryadovouu.github.io**

## Что на странице

Секции идут сверху вниз: приветствие → «Обо мне» → «Опыт» → «Образование» →
«Проекты» → «Хобби» → «Резюме» (кнопки на PDF) → «Контакты». В правом верхнем
углу — два слайдера: язык **EN⇄RU** и тема **☀️⇄🌙**. Выбор языка и темы
запоминается в браузере (`localStorage`).

## Как это устроено

```
src/
  data.ts              ← ВЕСЬ ТЕКСТ САЙТА (правишь в основном здесь)
  i18n.tsx             ← переключатель языка (React Context) + хук useLang()
  App.tsx              ← собирает секции вместе
  main.tsx             ← точка входа
  index.css            ← все стили и цвета тем (CSS-переменные)
  hooks/
    useTheme.ts        ← хранит светлую/тёмную тему
  components/
    Hero, About, Experience, Education,
    Projects, Hobbies, ResumeSection, Contact   ← секции страницы
    Slider.tsx         ← общий слайдер-переключатель
    LangSlider, ThemeSlider                       ← язык и тема поверх Slider
    Section.tsx        ← обёртка секции (заголовок + якорь)
public/
  resume-en.pdf, resume-ru.pdf   ← файлы резюме, на них ведут кнопки
resume/
  resume-en.tex, resume-ru.tex   ← исходники резюме (LaTeX)
.github/workflows/deploy.yml     ← автопубликация на GitHub Pages
```

**Главное:** почти весь контент (имя, «обо мне», опыт, проекты, хобби, ссылки)
лежит в одном файле — [`src/data.ts`](src/data.ts), в объекте `content` под ключами
`en` и `ru`. Меняешь два зеркальных блока — сайт подхватывает.

## Запуск локально

```bash
npm install      # один раз — поставить зависимости
npm run dev      # дев-сервер с горячей перезагрузкой (http://localhost:5173)
```

Другие команды:

```bash
npm run build    # собрать статику в dist/ (заодно проверит типы TypeScript)
npm run preview  # посмотреть собранную версию локально
```

## Как обновить резюме (PDF)

1. Отредактируй исходник в `resume/resume-en.tex` или `resume/resume-ru.tex`.
2. Скомпилируй в PDF (например, на [Overleaf](https://overleaf.com) или `pdflatex`).
3. Положи готовый файл в `public/` под тем же именем (`resume-en.pdf` / `resume-ru.pdf`).
4. Закоммить и запушь — кнопки на сайте будут вести на новую версию.

## Публикация

Деплой автоматический: **любой пуш в ветку `main`** запускает GitHub Action
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)), который собирает
сайт и публикует его на GitHub Pages. Прогресс виден во вкладке **Actions**.

> Первая настройка (один раз): **Settings → Pages → Source → GitHub Actions**.

Обычный цикл изменений:

```bash
# поправил src/data.ts или другие файлы
git add -A
git commit -m "update content"
git push        # через пару минут изменения на https://timryadovouu.github.io
```
