import { Hero } from './components/Hero/Hero'
import { ServiceCard } from './components/ServiceCard/ServiceCard'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { services } from './content/services'

// Fase 2 (dirección visual): solo Hero y una tarjeta de servicio de muestra.
// El resto de secciones se construye tras la aprobación.
function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <section
          id="servicios"
          aria-label="Servicios"
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: 'var(--space-section) var(--gutter)',
          }}
        >
          <ServiceCard service={services[0]} headingLevel={2} />
        </section>
      </main>
    </>
  )
}

export default App
