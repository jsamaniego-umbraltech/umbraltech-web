import logo from '../../assets/brand/logo-umbral-oscuro.svg'
import { company } from '../../content/company'
import { navLinks, type NavLink } from '../../content/navigation'
import './SiteFooter.css'

export interface SiteFooterProps {
  links?: readonly NavLink[]
  privacyHref?: string
  year?: number
}

export function SiteFooter({
  links = navLinks,
  privacyHref = '/privacidad/',
  year = new Date().getFullYear(),
}: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="site-footer__brand" href="/">
          <img src={logo} alt="Umbral Technologies, inicio" width={780} height={166} loading="lazy" />
        </a>
        <p className="site-footer__line">
          Software a la medida, integraciones y análisis de sistemas desde Panamá.
        </p>
        <nav className="site-footer__nav" aria-label="Pie de página">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={privacyHref}>Aviso de privacidad</a>
            </li>
          </ul>
        </nav>
        <p className="site-footer__legal">
          © {year} {company.legalName ?? company.name} · {company.country}
        </p>
      </div>
    </footer>
  )
}
