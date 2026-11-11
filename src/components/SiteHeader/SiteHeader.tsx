import { useId, useState } from 'react'
import { navLinks, type NavLink } from '../../content/navigation'
import logo from '../../assets/brand/logo-umbral-oscuro.svg'
import './SiteHeader.css'

export interface SiteHeaderProps {
  links?: readonly NavLink[]
  ctaHref?: string
}

export function SiteHeader({
  links = navLinks,
  ctaHref = '#contacto',
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  return (
    <header className="site-header" data-open={open}>
      <div className="site-header__bar">
        <a className="site-header__brand" href="/">
          <img
            src={logo}
            alt="Umbral Technologies, inicio"
            width={780}
            height={166}
          />
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">
              {open ? 'Cerrar menú' : 'Abrir menú'}
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {open ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <path d="M4 8H20M4 16H20" />
              )}
            </svg>
          </button>
          <ul className="site-header__links" id={menuId}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="button button--primary site-header__cta" href={ctaHref}>
          Escríbenos
        </a>
      </div>
    </header>
  )
}
