import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { processSteps } from '../../content/process'
import { Process } from './Process'

describe('Process', () => {
  it('renders the steps as an ordered list in sequence', () => {
    render(<Process />)
    const section = screen.getByRole('region', { name: 'Cómo trabajamos' })
    expect(section).toHaveAttribute('id', 'como-trabajamos')
    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items).toHaveLength(processSteps.length)
    items.forEach((item, i) => {
      expect(within(item).getByRole('heading', { level: 3 })).toHaveTextContent(processSteps[i].title)
    })
  })

  it('announces each outcome', () => {
    render(<Process />)
    expect(screen.getByText(processSteps[0].outcome)).toBeInTheDocument()
    expect(screen.getAllByText('Resultado:')).toHaveLength(processSteps.length)
  })
})
