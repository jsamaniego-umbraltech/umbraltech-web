import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services } from '../../content/services'
import { Services } from './Services'

describe('Services', () => {
  it('is a landmark reachable from the #servicios anchor', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: 'Lo que hacemos' })
    expect(section).toHaveAttribute('id', 'servicios')
  })

  it('renders one card per service, under the section heading', () => {
    render(<Services />)
    expect(screen.getAllByRole('article')).toHaveLength(services.length)
    services.forEach((service) => {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    })
  })
})
