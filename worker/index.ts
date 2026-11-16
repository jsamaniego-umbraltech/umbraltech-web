/**
 * Worker de umbraltech.net: sirve los archivos estáticos (dist/) y atiende
 * POST /api/contacto, que valida el formulario y lo envía por correo con Resend
 * a CONTACT_TO (admin@umbraltech.net). El MX del dominio es Google Workspace,
 * por eso no se usa Email Routing de Cloudflare.
 */
import { parseContact, validateContact, type ContactData } from '../src/lib/contact-schema'

export interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
  /** Secret: `npx wrangler secret put RESEND_API_KEY`. */
  RESEND_API_KEY: string
  /** Destino de los mensajes, p. ej. admin@umbraltech.net. */
  CONTACT_TO: string
  /** Remitente en el dominio verificado en Resend. */
  CONTACT_FROM: string
  /** Orígenes permitidos, separados por coma. */
  ALLOWED_ORIGINS: string
}

const MAX_BODY_BYTES = 16_000
const RESEND_URL = 'https://api.resend.com/emails'

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

/** Quita saltos de línea para que nada del usuario pueda inyectar cabeceras. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim()

export function buildEmail(data: ContactData, env: Env, receivedAt: Date) {
  const nombre = oneLine(data.nombre)
  const empresa = oneLine(data.empresa)
  const subject = `Contacto web: ${nombre}${empresa ? ` · ${empresa}` : ''}`.slice(0, 200)
  const text = [
    'Nuevo mensaje desde el formulario de umbraltech.net',
    '',
    `Nombre:   ${nombre}`,
    `Empresa:  ${empresa || '—'}`,
    `Correo:   ${oneLine(data.correo)}`,
    `Teléfono: ${oneLine(data.telefono) || '—'}`,
    `Servicio: ${oneLine(data.servicio) || 'Todavía no lo sé'}`,
    '',
    'Mensaje:',
    data.mensaje.trim(),
    '',
    '---',
    `Autorización de tratamiento de datos (Ley 81 de 2019): sí, ${receivedAt.toISOString()}`,
  ].join('\n')

  return {
    from: env.CONTACT_FROM,
    to: [env.CONTACT_TO],
    reply_to: oneLine(data.correo),
    subject,
    text,
  }
}

export async function handleContact(request: Request, env: Env, now = new Date()): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { Allow: 'POST' } })
  }

  const allowed = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  const origin = request.headers.get('Origin')
  if (!origin || !allowed.includes(origin)) return json(403, { error: 'origin' })

  if (!request.headers.get('Content-Type')?.includes('application/json')) {
    return json(415, { error: 'content-type' })
  }

  const raw = await request.text()
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) return json(413, { error: 'too-large' })

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return json(400, { error: 'json' })
  }

  // Honeypot: los bots llenan el campo oculto. Se responde OK sin enviar.
  if (typeof body === 'object' && body !== null && (body as Record<string, unknown>).sitio) {
    return json(200, { ok: true })
  }

  const data = parseContact(body)
  if (!data) return json(400, { error: 'shape' })
  const errors = validateContact(data)
  if (Object.keys(errors).length > 0) return json(422, { error: 'invalid', fields: errors })

  const response = await fetch(RESEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(buildEmail(data, env, now)),
  })

  if (!response.ok) {
    console.error('resend error', response.status, await response.text())
    return json(502, { error: 'send' })
  }
  return json(200, { ok: true })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === '/api/contacto') return handleContact(request, env)
    return env.ASSETS.fetch(request)
  },
}
