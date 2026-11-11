// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import worker, { buildEmail, handleContact, type Env } from './index'

const env: Env = {
  ASSETS: { fetch: vi.fn(async () => new Response('asset')) },
  RESEND_API_KEY: 're_test',
  CONTACT_TO: 'admin@umbraltech.net',
  CONTACT_FROM: 'Umbral Technologies <formulario@envios.umbraltech.net>',
  ALLOWED_ORIGINS: 'https://umbraltech.net,https://www.umbraltech.net',
}

const valid = {
  nombre: 'Ana Pérez',
  empresa: 'Comercial XYZ',
  correo: 'ana@empresa.com',
  telefono: '',
  servicio: 'Facturación electrónica',
  mensaje: 'Queremos integrar la factura electrónica.',
  consentimiento: true,
}

function post(body: unknown, init: { origin?: string | null; type?: string } = {}) {
  const headers = new Headers({ 'Content-Type': init.type ?? 'application/json' })
  if (init.origin !== null) headers.set('Origin', init.origin ?? 'https://umbraltech.net')
  return new Request('https://umbraltech.net/api/contacto', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('/api/contacto', () => {
  it('sends a valid message to admin@umbraltech.net through Resend', async () => {
    const fetchMock = vi.fn(async () => new Response('{"id":"1"}', { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)
    const res = await handleContact(post(valid), env)
    expect(res.status).toBe(200)
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('https://api.resend.com/emails')
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer re_test')
    const sent = JSON.parse(init.body as string)
    expect(sent.to).toEqual(['admin@umbraltech.net'])
    expect(sent.reply_to).toBe('ana@empresa.com')
    expect(sent.subject).toBe('Contacto web: Ana Pérez · Comercial XYZ')
  })

  it('rejects other origins and missing origin', async () => {
    vi.stubGlobal('fetch', vi.fn())
    expect((await handleContact(post(valid, { origin: 'https://evil.example' }), env)).status).toBe(403)
    expect((await handleContact(post(valid, { origin: null }), env)).status).toBe(403)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('validates with the same rules as the form', async () => {
    vi.stubGlobal('fetch', vi.fn())
    const res = await handleContact(post({ ...valid, consentimiento: false, correo: 'x' }), env)
    expect(res.status).toBe(422)
    const body = await res.json()
    expect(Object.keys(body.fields)).toEqual(expect.arrayContaining(['correo', 'consentimiento']))
    expect(fetch).not.toHaveBeenCalled()
  })

  it('rejects malformed bodies', async () => {
    vi.stubGlobal('fetch', vi.fn())
    expect((await handleContact(post('{nope'), env)).status).toBe(400)
    expect((await handleContact(post({ ...valid, nombre: 3 }), env)).status).toBe(400)
    expect((await handleContact(post(valid, { type: 'text/plain' }), env)).status).toBe(415)
    expect((await handleContact(post({ ...valid, mensaje: 'x'.repeat(20_000) }), env)).status).toBe(413)
  })

  it('silently drops honeypot submissions', async () => {
    vi.stubGlobal('fetch', vi.fn())
    const res = await handleContact(post({ ...valid, sitio: 'http://spam' }), env)
    expect(res.status).toBe(200)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('reports a provider failure as 502', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('bad', { status: 500 })))
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect((await handleContact(post(valid), env)).status).toBe(502)
  })

  it('only accepts POST', async () => {
    const res = await handleContact(new Request('https://umbraltech.net/api/contacto'), env)
    expect(res.status).toBe(405)
  })
})

describe('buildEmail', () => {
  it('strips line breaks from header fields', () => {
    const mail = buildEmail({ ...valid, nombre: 'Ana\r\nBcc: x@y.z' }, env, new Date('2026-11-10T12:00:00Z'))
    expect(mail.subject).not.toMatch(/[\r\n]/)
    expect(mail.text).toContain('Ley 81 de 2019): sí, 2026-11-10T12:00:00.000Z')
  })
})

describe('router', () => {
  it('serves static assets for other paths', async () => {
    const res = await worker.fetch(new Request('https://umbraltech.net/'), env)
    expect(await res.text()).toBe('asset')
  })
})
