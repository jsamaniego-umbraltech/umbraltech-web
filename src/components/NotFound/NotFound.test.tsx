import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NotFound } from './NotFound'

describe('NotFound', () => {
  it('is the page heading', () => {
    render(<NotFound />)
    expect(screen.getByRole('heading', { level: 1, name: 'Esta página no existe.' })).toBeInTheDocument()
  })

  it('links back home and to the contact form', () => {
    render(<NotFound />)
    expect(screen.getByRole('link', { name: 'Volver al inicio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Escríbenos' })).toHaveAttribute('href', '/#contacto')
  })
})
