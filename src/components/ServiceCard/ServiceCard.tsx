import type { Service } from '../../content/services'
import { ServiceMotif } from './ServiceMotif'
import './ServiceCard.css'

export interface ServiceCardProps {
  service: Service
  /** Nivel del título según la jerarquía de la página. */
  headingLevel?: 2 | 3
  /** Destino del enlace de contacto. */
  contactHref?: string
}

export function ServiceCard({
  service,
  headingLevel = 3,
  contactHref = '#contacto',
}: ServiceCardProps) {
  const Heading = `h${headingLevel}` as const
  const titleId = `servicio-${service.id}-titulo`

  return (
    <article
      className="service-card"
      id={`servicio-${service.id}`}
      aria-labelledby={titleId}
    >
      <div className="service-card__head">
        <ServiceMotif motif={service.motif} />
        <Heading className="service-card__title" id={titleId}>
          {service.title}
        </Heading>
      </div>
      <div className="service-card__body">
        <p className="service-card__summary">{service.summary}</p>
        <p className="service-card__label" id={`${titleId}-incluye`}>
          Incluye
        </p>
        <ul
          className="service-card__includes"
          aria-labelledby={`${titleId}-incluye`}
        >
          {service.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="service-card__link" href={contactHref}>
          Conversemos sobre este servicio
          <span className="visually-hidden">: {service.title}</span>
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M2 8H13M9 4L13 8L9 12" />
          </svg>
        </a>
      </div>
    </article>
  )
}
