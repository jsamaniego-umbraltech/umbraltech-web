import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services } from '../../content/services'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the page heading as the section label', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/software con criterio de banca/i)
    expect(screen.getByRole('region', { name: /software con criterio/i })).toBeInTheDocument()
  })

  it('offers the primary and secondary actions', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Agenda una conversación' })).toHaveAttribute('href', '#contacto')
    expect(screen.getByRole('link', { name: 'Ver servicios' })).toHaveAttribute('href', '#servicios')
  })

  it('indexes every service with a link to its card', () => {
    render(<Hero />)
    const index = screen.getByRole('navigation', { name: 'Servicios' })
    const links = within(index).getAllByRole('link')
    expect(links).toHaveLength(services.length)
    services.forEach((service, i) => {
      expect(links[i]).toHaveAccessibleName(service.title)
      expect(links[i]).toHaveAttribute('href', `#servicio-${service.id}`)
    })
  })

  it('keeps the logo figure out of the accessibility tree', () => {
    const { container } = render(<Hero animated={false} />)
    expect(container.querySelector('.umbral-arc')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('.umbral-arc--animated')).toBeNull()
  })
})
