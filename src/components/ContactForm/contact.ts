import { company } from '../../content/company'

export interface ContactData {
  nombre: string
  empresa: string
  correo: string
  telefono: string
  servicio: string
  mensaje: string
  consentimiento: boolean
}

export type ContactErrors = Partial<Record<keyof ContactData, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {}
  if (!data.nombre.trim()) errors.nombre = 'Escribe tu nombre.'
  if (!data.correo.trim()) errors.correo = 'Escribe tu correo para poder responderte.'
  else if (!EMAIL.test(data.correo.trim()))
    errors.correo = 'Revisa el correo: debe tener la forma nombre@empresa.com.'
  if (data.telefono.trim() && !/^[+\d][\d\s-]{6,}$/.test(data.telefono.trim()))
    errors.telefono = 'Revisa el teléfono: usa solo números, espacios o guiones.'
  if (data.mensaje.trim().length < 10)
    errors.mensaje = 'Cuéntanos un poco más (al menos 10 caracteres).'
  if (!data.consentimiento)
    errors.consentimiento = 'Necesitamos tu autorización para usar estos datos y responderte.'
  return errors
}

export class ContactNotConfiguredError extends Error {
  constructor() {
    super('contact endpoint not configured')
    this.name = 'ContactNotConfiguredError'
  }
}

/** Envía el formulario al endpoint configurado (VITE_CONTACT_ENDPOINT). */
export async function sendContact(data: ContactData): Promise<void> {
  if (!company.contactEndpoint) throw new ContactNotConfiguredError()
  const response = await fetch(company.contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
}
