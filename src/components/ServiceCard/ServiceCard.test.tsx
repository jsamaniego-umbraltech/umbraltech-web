import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services } from '../../content/services'
import { ServiceCard } from './ServiceCard'

const service = services[0]

describe('ServiceCard', () => {
  it('renders an article labelled by the service title', () => {
    render(<ServiceCard service={service} />)
    const article = screen.getByRole('article', { name: service.title })
    expect(article).toHaveAttribute('id', `servicio-${service.id}`)
    expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
  })

  it('honours the requested heading level', () => {
    render(<ServiceCard service={service} headingLevel={2} />)
    expect(screen.getByRole('heading', { level: 2, name: service.title })).toBeInTheDocument()
  })

  it('lists what the service includes', () => {
    render(<ServiceCard service={service} />)
    const list = screen.getByRole('list', { name: 'Incluye' })
    service.includes.forEach((item) => {
      expect(list).toHaveTextContent(item)
    })
  })

  it('links to contact with a name that identifies the service', () => {
    render(<ServiceCard service={service} contactHref="#form" />)
    const link = screen.getByRole('link', { name: new RegExp(service.title) })
    expect(link).toHaveAttribute('href', '#form')
  })
})
