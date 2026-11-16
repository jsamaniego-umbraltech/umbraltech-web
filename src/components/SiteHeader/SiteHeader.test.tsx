import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { navLinks } from '../../content/navigation'
import { SiteHeader } from './SiteHeader'

describe('SiteHeader', () => {
  it('shows the brand logo linking home', () => {
    render(<SiteHeader />)
    expect(screen.getByRole('link', { name: /umbral technologies, inicio/i })).toHaveAttribute('href', '/')
  })

  it('lists the section links in the main navigation', () => {
    render(<SiteHeader />)
    const nav = screen.getByRole('navigation', { name: 'Principal' })
    navLinks.forEach((link) => {
      expect(nav).toContainElement(screen.getByRole('link', { name: link.label }))
    })
  })

  it('toggles the mobile menu and reflects it in aria-expanded', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    const toggle = screen.getByRole('button', { name: 'Abrir menú' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: 'Servicios' }))
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps a contact call to action', () => {
    render(<SiteHeader ctaHref="#c" />)
    expect(screen.getByRole('link', { name: 'Escríbenos' })).toHaveAttribute('href', '#c')
  })
})
