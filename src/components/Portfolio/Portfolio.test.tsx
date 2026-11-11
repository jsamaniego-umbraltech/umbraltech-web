import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { demoProjects } from '../../content/portfolio'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('states that projects are examples with fictitious data', () => {
    render(<Portfolio />)
    expect(screen.getByText(/proyectos de ejemplo, con datos ficticios/i)).toBeInTheDocument()
    expect(screen.getAllByText('Ejemplo · datos ficticios')).toHaveLength(demoProjects.length)
  })

  it('renders each project with its demo table', () => {
    render(<Portfolio />)
    demoProjects.forEach((project) => {
      const article = screen.getByRole('article', { name: project.title })
      const table = within(article).getByRole('table')
      expect(within(table).getAllByRole('row')).toHaveLength(project.rows.length + 1)
    })
  })

  it('labels row status in text, not only colour', () => {
    render(<Portfolio projects={demoProjects.slice(0, 1)} />)
    expect(screen.getByText('Revisar')).toBeInTheDocument()
  })
})
