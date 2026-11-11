import { services as defaultServices, type Service } from '../../content/services'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import './Services.css'

export interface ServicesProps {
  services?: readonly Service[]
}

export function Services({ services = defaultServices }: ServicesProps) {
  return (
    <section className="section services" id="servicios" aria-labelledby="servicios-titulo">
      <div className="section__inner">
        <header className="section__header">
          <h2 className="section__title" id="servicios-titulo">
            Lo que hacemos
          </h2>
          <p className="section__intro">
            Cinco frentes, un mismo criterio: entender cómo funciona tu negocio
            antes de escribir una línea de código.
          </p>
        </header>
        <ul className="services__list">
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
