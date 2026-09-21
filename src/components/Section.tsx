import type { ReactNode } from 'react'

// Переиспользуемая обёртка секции: якорь для навигации + заголовок.
// Пример композиции и типизации props с children.
interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
