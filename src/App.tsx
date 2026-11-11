import { ContactSection } from './components/ContactSection/ContactSection'
import { Hero } from './components/Hero/Hero'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Process } from './components/Process/Process'
import { Services } from './components/Services/Services'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { SiteHeader } from './components/SiteHeader/SiteHeader'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
