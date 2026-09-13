// ────────────────────────────────────────────────────────────────
//  Все данные страницы в одном месте.
//  Сайт двуязычный: контент лежит в объекте `content` под ключами
//  'en' и 'ru'. Правишь два зеркальных блока — переключатель языка
//  на странице показывает нужный.
// ────────────────────────────────────────────────────────────────

export type Lang = "en" | "ru";

// ── Типы ─────────────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string; // ссылка на репозиторий/демо (необязательно)
}

export interface Education {
  org: string;
  place: string;
  degree: string;
  period: string;
}

export interface Job {
  role: string;
  org: string;
  place: string;
  period: string;
  bullets: string[]; // обязанности и достижения
}

export interface Social {
  label: string;
  href: string;
}

export interface Resume {
  label: string;
  href: string; // путь к PDF в папке public/
}

// подписи секций и кнопок — тоже переводятся
export interface UIStrings {
  about: string;
  experience: string;
  education: string;
  projects: string;
  resume: string;
  hobbies: string;
  contact: string;
  open: string;
  email: string;
  phone: string;
}

// весь переводимый контент одной секции сайта
export interface SiteContent {
  tagline: string;
  location: string;
  about: string[];
  experience: Job[];
  education: Education[];
  projects: Project[];
  hobbies: string[];
  ui: UIStrings;
}

// ── Не зависит от языка ──────────────────────────────────────────
export const profile = {
  name: "tim ryadovoi",
  email: "timaryadovou@yandex.ru",
  phone: "+7 999 035-03-29",
  website: "https://timryadovouu.github.io",
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/timryadovouu" },
  { label: "Telegram", href: "https://t.me/urokodaki_sakonji" },
  // { label: 'LinkedIn', href: 'https://linkedin.com/in/...' },
];

// PDF кладутся в public/ (resume-en.pdf, resume-ru.pdf)
export const resumes: Resume[] = [
  { label: "🇬🇧 Resume (EN)", href: "/resume-en.pdf" },
  { label: "🇷🇺 Резюме (RU)", href: "/resume-ru.pdf" },
];

// ── Двуязычный контент ───────────────────────────────────────────
export const content: Record<Lang, SiteContent> = {
  // ───────────────────────────── English ─────────────────────────
  en: {
    tagline: "data analyst",
    location: "saint petersburg, russia",
    about: [
      "Data analyst and ML enthusiast. I enjoy the full cycle of a data task — from exploration and preprocessing to training models and shipping them.",
      "Currently a Master's student in Machine Vision Systems & Technologies at ETU, working as a Data Analyst.",
    ],
    experience: [
      {
        role: "Data Analyst",
        org: "Sovcombank",
        place: "Saint Petersburg",
        period: "July 2025 — present",
        bullets: [
          "Build data pipelines that automate processing and transformation of data before analysis.",
          "Extract data from databases, warehouses, data marts and other sources.",
          "Preprocess, clean and prepare data for downstream analysis.",
          "Prepare and deliver presentations of analysis and modeling results.",
          "Build and maintain regular reporting and dashboards (Power BI).",
          "Run Monte Carlo risk-testing of the bank's credit portfolios.",
        ],
      },
    ],
    education: [
      {
        org: "ETU",
        place: "Saint Petersburg",
        degree: "Master's — Machine Vision Systems & Technologies",
        period: "2026 — present",
      },
      {
        org: "ITMO University",
        place: "Saint Petersburg",
        degree: "Bachelor — Design and Technology of Electronic Devices",
        period: "2021 — 2026",
      },
    ],
    projects: [
      {
        title: "cape",
        description:
          "Native macOS utility that turns the space around the camera notch into an interactive control hub (à la Dynamic Island): timer, clipboard buffer, media controls, to-do list, screen-time tracking and on-device voice dictation.",
        tags: ["Swift", "SwiftUI", "macOS"],
        link: "https://github.com/timryadovouu/cape",
      },
      {
        title: "Why colliding blocks compute Pi",
        description:
          "Talk at ITMO University on the mechanics behind blocks whose collisions count the digits of Pi.",
        tags: ["ITMO", "Talk", "Physics"],
      },
      {
        title: "Qudits in high-dimensional quantum spaces",
        description:
          "Talk at an ITMO quantum seminar on qudits and higher-dimensional quantum systems.",
        tags: ["ITMO", "Talk", "Quantum"],
      },
    ],
    hobbies: [
      "Fencing",
      "Badminton",
      "Cycling",
      "Table tennis",
      "Piano & guitar",
      "Math & physics",
      "Science fiction",
    ],
    ui: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      resume: "Resume",
      hobbies: "Hobbies",
      contact: "Contact",
      open: "Open →",
      email: "Email",
      phone: "Phone",
    },
  },

  // ───────────────────────────── Русский ─────────────────────────
  ru: {
    tagline: "data analyst",
    location: "saint petersburg, russia",
    about: [
      "Аналитик данных, увлечён машинным обучением. Люблю полный цикл задачи — от исследования и предобработки данных до обучения моделей и их внедрения.",
      "Сейчас учусь в магистратуре СПбГЭТУ «ЛЭТИ» по направлению «Системы и технологии технического зрения» и работаю аналитиком данных.",
    ],
    experience: [
      {
        role: "Аналитик данных",
        org: "Совкомбанк",
        place: "Санкт-Петербург",
        period: "Июль 2025 — н.в.",
        bullets: [
          "Формирование конвейеров (пайплайнов) для автоматизации обработки и трансформации данных перед анализом.",
          "Выгрузка данных из баз данных, хранилищ, витрин и других источников.",
          "Предобработка, очистка и подготовка данных для дальнейшего анализа.",
          "Подготовка и проведение презентаций с результатами анализа и моделирования.",
          "Построение и поддержка регулярной отчётности и дашбордов (Power BI).",
          "Риск-тестирование кредитных портфелей банка методом Монте-Карло.",
        ],
      },
    ],
    education: [
      {
        org: "СПбГЭТУ «ЛЭТИ»",
        place: "Санкт-Петербург",
        degree: "Магистратура — «Системы и технологии технического зрения»",
        period: "2026 — н.в.",
      },
      {
        org: "Университет ИТМО",
        place: "Санкт-Петербург",
        degree:
          "Бакалавриат — «Конструирование и технология электронных средств»",
        period: "2021 — 2026",
      },
    ],
    projects: [
      {
        title: "cape",
        description:
          "Нативная утилита для macOS, превращающая пространство вокруг выреза камеры в интерактивный хаб в духе Dynamic Island: таймер, буфер обмена, управление музыкой, to-do, учёт экранного времени и голосовой ввод на устройстве.",
        tags: ["Swift", "SwiftUI", "macOS"],
        link: "https://github.com/timryadovouu/cape",
      },
      {
        title: "Почему сталкивающиеся блоки образуют число Пи",
        description:
          "Выступление на студенческой весне ИТМО о механике блоков, число столкновений которых даёт цифры числа Пи.",
        tags: ["ИТМО", "Доклад", "Физика"],
      },
      {
        title: "Кудиты в квантовых пространствах высокой размерности",
        description:
          "Выступление на квантовом семинаре ИТМО о кудитах и квантовых системах высокой размерности.",
        tags: ["ИТМО", "Доклад", "Квантовые системы"],
      },
    ],
    hobbies: [
      "Фехтование",
      "Бадминтон",
      "Велоспорт",
      "Настольный теннис",
      "Фортепиано и гитара",
      "Математика и физика",
      "Научная фантастика",
    ],
    ui: {
      about: "Обо мне",
      experience: "Опыт",
      education: "Образование",
      projects: "Проекты",
      resume: "Резюме",
      hobbies: "Хобби",
      contact: "Контакты",
      open: "Открыть →",
      email: "Email",
      phone: "Телефон",
    },
  },
};
