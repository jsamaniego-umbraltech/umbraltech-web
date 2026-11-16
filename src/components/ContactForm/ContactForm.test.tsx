import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm'
import { validateContact } from './contact'

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Nombre'), 'Ana Pérez')
  await user.type(screen.getByLabelText('Correo'), 'ana@empresa.com')
  await user.type(screen.getByLabelText('Cuéntanos qué necesitas'), 'Necesitamos automatizar la facturación.')
  await user.click(screen.getByRole('checkbox'))
}

describe('ContactForm', () => {
  it('shows the Ley 81 privacy notice and links to the full notice', () => {
    render(<ContactForm privacyHref="/privacidad/" />)
    expect(screen.getByText(/Ley 81 de 2019/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'aviso de privacidad' })).toHaveAttribute('href', '/privacidad/')
    expect(screen.getByRole('checkbox')).toHaveAccessibleDescription(/Ley 81 de 2019/)
  })

  it('blocks submission, flags fields and focuses the first error', async () => {
    const user = userEvent.setup()
    const send = vi.fn()
    render(<ContactForm send={send} />)
    await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))
    expect(send).not.toHaveBeenCalled()
    expect(screen.getByLabelText('Nombre')).toHaveFocus()
    expect(screen.getByLabelText('Nombre')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Nombre')).toHaveAccessibleDescription('Escribe tu nombre.')
    expect(screen.getByText(/Necesitamos tu autorización/)).toBeInTheDocument()
  })

  it('sends valid data and confirms receipt', async () => {
    const user = userEvent.setup()
    const send = vi.fn().mockResolvedValue(undefined)
    render(<ContactForm send={send} />)
    await fillValid(user)
    await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({ nombre: 'Ana Pérez', correo: 'ana@empresa.com', consentimiento: true }),
    )
    expect(await screen.findByText('Recibimos tu mensaje.')).toBeInTheDocument()
  })

  it('explains a failed send and keeps the data', async () => {
    const user = userEvent.setup()
    render(<ContactForm send={() => Promise.reject(new Error('x'))} />)
    await fillValid(user)
    await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))
    expect(await screen.findByText(/No pudimos enviar tu mensaje/)).toBeInTheDocument()
    expect(screen.getByLabelText('Nombre')).toHaveValue('Ana Pérez')
  })
})

describe('validateContact', () => {
  const base = {
    nombre: 'A', empresa: '', correo: 'a@b.co', telefono: '', servicio: '', mensaje: '1234567890', consentimiento: true,
  }

  it('accepts a complete submission', () => {
    expect(validateContact(base)).toEqual({})
  })

  it('rejects malformed email and phone', () => {
    const errors = validateContact({ ...base, correo: 'a@b', telefono: 'abc' })
    expect(errors.correo).toMatch(/Revisa el correo/)
    expect(errors.telefono).toMatch(/Revisa el teléfono/)
  })
})
