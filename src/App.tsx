import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Hobbies } from './components/Hobbies'
import { ResumeSection } from './components/ResumeSection'
import { Contact } from './components/Contact'
import { ThemeSlider } from './components/ThemeSlider'
import { LangSlider } from './components/LangSlider'
import { LanguageProvider } from './i18n'
import { profile } from './data'

// Корневой компонент: одна прокручиваемая страница, секции идут подряд.
// Всё дерево обёрнуто в LanguageProvider, чтобы любой компонент мог
// получить текущий язык через useLang().
export default function App() {
  return (
    <LanguageProvider>
      <div className="toggles">
        <LangSlider />
        <ThemeSlider />
      </div>

      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Hobbies />
        <ResumeSection />
        <Contact />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </LanguageProvider>
  )
}
