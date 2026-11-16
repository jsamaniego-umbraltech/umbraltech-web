import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './index.css'
import { PrivacyNotice } from './components/PrivacyNotice/PrivacyNotice'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { navLinks } from './content/navigation'

const homeLinks = navLinks.map((link) => ({ ...link, href: `/${link.href}` }))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <a className="skip-link" href="#contenido">
      Saltar al contenido
    </a>
    <SiteHeader links={homeLinks} ctaHref="/#contacto" />
    <main id="contenido">
      <PrivacyNotice />
    </main>
    <SiteFooter links={homeLinks} />
  </StrictMode>,
)
