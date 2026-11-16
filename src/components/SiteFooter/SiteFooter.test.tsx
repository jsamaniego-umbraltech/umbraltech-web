import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('links to the privacy notice', () => {
    render(<SiteFooter privacyHref="/privacidad/" />)
    expect(screen.getByRole('link', { name: 'Aviso de privacidad' })).toHaveAttribute('href', '/privacidad/')
  })

  it('shows the copyright year and company', () => {
    render(<SiteFooter year={2026} />)
    expect(screen.getByRole('contentinfo')).toHaveTextContent('© 2026 Umbral Technologies · Panamá')
  })
})
