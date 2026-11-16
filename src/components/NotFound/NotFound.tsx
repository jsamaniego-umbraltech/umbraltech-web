import './NotFound.css'

export interface NotFoundProps {
  /** Destino del enlace principal. */
  homeHref?: string
  /** Destino del enlace a contacto. */
  contactHref?: string
}

/** Contenido de la página 404 (dist/404.html, `not_found_handling: "404-page"`). */
export function NotFound({ homeHref = '/', contactHref = '/#contacto' }: NotFoundProps) {
  return (
    <section className="not-found" aria-labelledby="not-found-titulo">
      <p className="not-found__code">404</p>
      <h1 id="not-found-titulo">Esta página no existe.</h1>
      <p className="not-found__lead">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="not-found__actions">
        <a className="button button--primary" href={homeHref}>
          Volver al inicio
        </a>
        <a className="button button--secondary" href={contactHref}>
          Escríbenos
        </a>
      </div>
    </section>
  )
}
