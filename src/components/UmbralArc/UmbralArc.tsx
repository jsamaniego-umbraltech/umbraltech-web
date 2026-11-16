import './UmbralArc.css'

export interface UmbralArcProps {
  /** Dibuja el trazo una vez al montarse (se omite con prefers-reduced-motion). */
  animated?: boolean
  className?: string
}

/**
 * La figura del logo (arco U y punto) a escala de cartel. Geometría idéntica a
 * la del kit de marca; es decorativa, el nombre lo lleva el logo.
 */
export function UmbralArc({ animated = true, className }: UmbralArcProps) {
  const classes = ['umbral-arc', animated && 'umbral-arc--animated', className]
    .filter(Boolean)
    .join(' ')

  return (
    <svg
      className={classes}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path className="umbral-arc__guide" d="M14 0V34A18 18 0 0 0 50 34V0" />
      <path
        className="umbral-arc__stroke"
        d="M14 6V34A18 18 0 0 0 50 34V6"
        pathLength={1}
      />
      <circle className="umbral-arc__dot" cx="32" cy="32" r="7" />
    </svg>
  )
}
