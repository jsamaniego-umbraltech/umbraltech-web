import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UmbralArc } from './UmbralArc'

describe('UmbralArc', () => {
  it('is decorative', () => {
    const { container } = render(<UmbralArc />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('focusable', 'false')
  })

  it('uses the brand mark geometry', () => {
    const { container } = render(<UmbralArc />)
    expect(container.querySelector('.umbral-arc__stroke')).toHaveAttribute('d', 'M14 6V34A18 18 0 0 0 50 34V6')
    expect(container.querySelector('circle')).toHaveAttribute('r', '7')
  })

  it('can render without the draw animation', () => {
    const { container } = render(<UmbralArc animated={false} className="x" />)
    expect(container.querySelector('svg')).toHaveClass('umbral-arc', 'x')
    expect(container.querySelector('svg')).not.toHaveClass('umbral-arc--animated')
  })
})
