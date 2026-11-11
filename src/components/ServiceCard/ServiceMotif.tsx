import type { ServiceMotif as Motif } from '../../content/services'

/** Figuras derivadas de la geometría del logo: arco, punto, barras. */
export function ServiceMotif({ motif }: { motif: Motif }) {
  return (
    <svg
      className="service-motif"
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      {motif === 'arc' && (
        <>
          <path d="M9 4V21A11 11 0 0 0 31 21V4" className="service-motif__line" />
          <circle cx="20" cy="20" r="4" className="service-motif__dot" />
        </>
      )}
      {motif === 'dot' && (
        <>
          <path d="M4 20H14M26 20H36M20 4V14M20 26V36" className="service-motif__line" />
          <circle cx="20" cy="20" r="4" className="service-motif__dot" />
        </>
      )}
      {motif === 'bars' && (
        <>
          <path d="M8 6V34M16 6V34M24 6V34" className="service-motif__line" />
          <circle cx="32" cy="30" r="4" className="service-motif__dot" />
        </>
      )}
      {motif === 'frame' && (
        <>
          <path d="M5 8H35V32H5ZM5 15H35" className="service-motif__line" />
          <circle cx="20" cy="24" r="4" className="service-motif__dot" />
        </>
      )}
      {motif === 'lens' && (
        <>
          <path d="M6 20A14 14 0 0 1 34 20A14 14 0 0 1 6 20Z" className="service-motif__line" />
          <circle cx="20" cy="20" r="4" className="service-motif__dot" />
        </>
      )}
    </svg>
  )
}
