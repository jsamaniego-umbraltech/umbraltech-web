/**
 * Esquema y validación del formulario de contacto. Módulo puro: lo usan el
 * formulario (navegador) y el Worker (/api/contacto), para que ambos apliquen
 * exactamente las mismas reglas.
 */
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

export const LIMITS = {
  nombre: 120,
  empresa: 160,
  correo: 254,
  telefono: 40,
  servicio: 120,
  mensaje: 5000,
} as const

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE = /^[+\d][\d\s-]{6,}$/

export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {}
  if (!data.nombre.trim()) errors.nombre = 'Escribe tu nombre.'
  else if (data.nombre.length > LIMITS.nombre) errors.nombre = 'El nombre es demasiado largo.'
  if (!data.correo.trim()) errors.correo = 'Escribe tu correo para poder responderte.'
  else if (!EMAIL.test(data.correo.trim()) || data.correo.length > LIMITS.correo)
    errors.correo = 'Revisa el correo: debe tener la forma nombre@empresa.com.'
  if (data.telefono.trim() && (!PHONE.test(data.telefono.trim()) || data.telefono.length > LIMITS.telefono))
    errors.telefono = 'Revisa el teléfono: usa solo números, espacios o guiones.'
  if (data.empresa.length > LIMITS.empresa) errors.empresa = 'El nombre de la empresa es demasiado largo.'
  if (data.servicio.length > LIMITS.servicio) errors.servicio = 'Elige un servicio de la lista.'
  if (data.mensaje.trim().length < 10)
    errors.mensaje = 'Cuéntanos un poco más (al menos 10 caracteres).'
  else if (data.mensaje.length > LIMITS.mensaje)
    errors.mensaje = `El mensaje es demasiado largo (máximo ${LIMITS.mensaje} caracteres).`
  if (data.consentimiento !== true)
    errors.consentimiento = 'Necesitamos tu autorización para usar estos datos y responderte.'
  return errors
}

/** Convierte un cuerpo JSON desconocido en ContactData, o null si no tiene la forma. */
export function parseContact(input: unknown): ContactData | null {
  if (typeof input !== 'object' || input === null) return null
  const o = input as Record<string, unknown>
  const str = (k: string) => (typeof o[k] === 'string' ? (o[k] as string) : o[k] == null ? '' : null)
  const fields = ['nombre', 'empresa', 'correo', 'telefono', 'servicio', 'mensaje'] as const
  const out: Partial<ContactData> = {}
  for (const k of fields) {
    const v = str(k)
    if (v === null) return null
    out[k] = v
  }
  if (typeof o.consentimiento !== 'boolean') return null
  out.consentimiento = o.consentimiento
  return out as ContactData
}
