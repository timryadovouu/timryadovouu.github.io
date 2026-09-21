import { useRef, useState, type ReactNode } from 'react'

// Геометрия слайдера (px) — должна совпадать с CSS (.slider / .slider-knob).
const TRACK = 64 // ширина дорожки (внешняя, вместе с рамкой)
const KNOB = 30 // ширина бегунка
const PAD = 2 // отступ бегунка от внутреннего края
const BORDER = 1 // рамка дорожки с каждой стороны
// Ход бегунка: вычитаем ширину бегунка, отступы И рамки с обеих сторон,
// иначе в правом положении бегунок «заезжает» за край.
const TRAVEL = TRACK - KNOB - PAD * 2 - BORDER * 2 // 28

type Side = 'left' | 'right'

interface SliderProps {
  left: ReactNode // подпись слева
  right: ReactNode // подпись справа
  side: Side // какая сторона активна сейчас
  onChange: (side: Side) => void // запрос сменить сторону
  ariaLabel: string
}

// Переиспользуемый слайдер-переключатель на два положения.
// Меняет значение по клику и по перетаскиванию бегунка.
// Используется и для языка, и для темы.
export function Slider({ left, right, side, onChange, ariaLabel }: SliderProps) {
  const [dragX, setDragX] = useState<number | null>(null)
  const draggingRef = useRef(false)
  const movedRef = useRef(false)
  const dragXRef = useRef(0)

  const restX = side === 'left' ? 0 : TRAVEL
  const knobX = dragX ?? restX

  const flip = () => onChange(side === 'left' ? 'right' : 'left')

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    movedRef.current = false
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    movedRef.current = true
    const rect = e.currentTarget.getBoundingClientRect()
    // центр бегунка под курсором (с учётом рамки и отступа), кламп в [0, TRAVEL]
    const x = Math.max(0, Math.min(TRAVEL, e.clientX - rect.left - BORDER - PAD - KNOB / 2))
    dragXRef.current = x
    setDragX(x)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)

    if (movedRef.current) {
      // перетаскивали — сторона по тому, в какую половину отпустили
      const target: Side = dragXRef.current > TRAVEL / 2 ? 'right' : 'left'
      if (target !== side) onChange(target)
    } else {
      flip() // простой клик
    }
    setDragX(null)
  }

  return (
    <div
      className="slider"
      role="switch"
      aria-checked={side === 'right'}
      aria-label={ariaLabel}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          flip()
        }
      }}
    >
      <span className={`slider-label left ${side === 'left' ? 'active' : ''}`}>{left}</span>
      <span className={`slider-label right ${side === 'right' ? 'active' : ''}`}>{right}</span>
      <span
        className={`slider-knob ${dragX != null ? 'dragging' : ''}`}
        style={{ transform: `translateX(${knobX}px)` }}
      />
    </div>
  )
}
