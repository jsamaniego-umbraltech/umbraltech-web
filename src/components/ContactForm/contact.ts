import { company } from '../../content/company'
import type { ContactData } from '../../lib/contact-schema'

export { validateContact, type ContactData, type ContactErrors } from '../../lib/contact-schema'

/** Envía el formulario al Worker (/api/contacto), que lo reenvía por correo. */
export async function sendContact(data: ContactData): Promise<void> {
  const response = await fetch(company.contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
}
