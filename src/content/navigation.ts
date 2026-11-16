export interface NavLink {
  href: string
  label: string
}

export const navLinks: readonly NavLink[] = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#contacto', label: 'Contacto' },
]
