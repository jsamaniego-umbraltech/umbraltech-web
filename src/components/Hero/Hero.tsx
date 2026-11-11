import { services as defaultServices, type Service } from '../../content/services'
import { UmbralArc } from '../UmbralArc/UmbralArc'
import './Hero.css'

export interface HeroProps {
  services?: readonly Service[]
  /** Desactiva el trazo animado del arco (p. ej. en capturas). */
  animated?: boolean
}

export function Hero({ services = defaultServices, animated = true }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <div className="hero__grid-lines" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="hero__inner">
        <h1 className="hero__title" id="hero-titulo">
          Software con criterio de banca,{' '}
          <span className="hero__title-soft">a la medida de tu empresa.</span>
        </h1>

        <div className="hero__figure">
          <UmbralArc animated={animated} />
        </div>

        <p className="hero__lede">
          Desarrollamos, integramos y analizamos sistemas para pymes, empresas
          medianas y grandes, y el sector público en Panamá.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#contacto">
            Agenda una conversación
          </a>
          <a className="button button--secondary" href="#servicios">
            Ver servicios
          </a>
        </div>

        <p className="hero__credential">
          <strong>Venimos de construir software para la banca,</strong> donde
          un error se paga caro. Ese es el estándar que traemos a tu empresa.
        </p>
      </div>

      <nav className="hero__index" aria-label="Servicios">
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <a href={`#servicio-${service.id}`}>{service.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
