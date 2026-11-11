import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PrivacyNotice } from './PrivacyNotice'

describe('PrivacyNotice', () => {
  it('is the page heading and cites Ley 81 de 2019', () => {
    render(<PrivacyNotice />)
    expect(screen.getByRole('heading', { level: 1, name: 'Aviso de privacidad' })).toBeInTheDocument()
    expect(screen.getByText(/Ley 81 de 2019/)).toBeInTheDocument()
  })

  it('lists the data subject rights', () => {
    render(<PrivacyNotice />)
    for (const right of ['Acceso:', 'Rectificación:', 'Cancelación:', 'Oposición:', 'Portabilidad:']) {
      expect(screen.getByText(right)).toBeInTheDocument()
    }
  })

  it('marks company data that is not yet published instead of inventing it', () => {
    render(<PrivacyNotice />)
    expect(screen.getAllByText('dato pendiente de publicación').length).toBeGreaterThan(0)
  })
})

describe('PrivacyNotice contact', () => {
  it('gives the email to exercise data rights', () => {
    render(<PrivacyNotice />)
    const links = screen.getAllByRole('link', { name: 'admin@umbraltech.net' })
    expect(links.length).toBeGreaterThanOrEqual(2)
    links.forEach((l) => expect(l).toHaveAttribute('href', 'mailto:admin@umbraltech.net'))
  })
})
