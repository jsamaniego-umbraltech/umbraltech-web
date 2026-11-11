import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('is the #contacto landmark with the contact form', () => {
    render(<ContactSection send={async () => {}} />)
    const section = screen.getByRole('region', { name: /cuéntanos qué te quita tiempo/i })
    expect(section).toHaveAttribute('id', 'contacto')
    expect(screen.getByRole('button', { name: 'Enviar mensaje' })).toBeInTheDocument()
  })
})

describe('ContactSection direct email', () => {
  it('offers the public contact email', () => {
    render(<ContactSection send={async () => {}} />)
    expect(screen.getByRole('link', { name: 'admin@umbraltech.net' })).toHaveAttribute('href', 'mailto:admin@umbraltech.net')
  })
})
