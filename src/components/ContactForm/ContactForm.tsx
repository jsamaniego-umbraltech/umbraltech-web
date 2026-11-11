import { useId, useRef, useState, type FormEvent } from 'react'
import { services } from '../../content/services'
import {
  sendContact,
  validateContact,
  type ContactData,
  type ContactErrors,
} from './contact'
import './ContactForm.css'

type Status = 'idle' | 'sending' | 'sent' | 'failed'

export interface ContactFormProps {
  send?: (data: ContactData) => Promise<void>
  privacyHref?: string
}

const empty: ContactData = {
  nombre: '',
  empresa: '',
  correo: '',
  telefono: '',
  servicio: '',
  mensaje: '',
  consentimiento: false,
}

const order: (keyof ContactData)[] = ['nombre', 'correo', 'telefono', 'mensaje', 'consentimiento']

export function ContactForm({ send = sendContact, privacyHref = '/privacidad/' }: ContactFormProps) {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [data, setData] = useState<ContactData>(empty)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const fieldId = (name: keyof ContactData) => `${id}-${name}`
  const errorId = (name: keyof ContactData) => `${id}-${name}-error`

  function update<K extends keyof ContactData>(name: K, value: ContactData[K]) {
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const honeypot = new FormData(event.currentTarget).get('sitio')
    if (honeypot) return
    const found = validateContact(data)
    setErrors(found)
    const first = order.find((name) => found[name])
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(first))}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      await send(data)
      setStatus('sent')
      setData(empty)
    } catch {
      setStatus('failed')
    }
  }

  const describedBy = (name: keyof ContactData, hint?: string) =>
    [hint, errors[name] ? errorId(name) : undefined].filter(Boolean).join(' ') || undefined

  const error = (name: keyof ContactData) =>
    errors[name] ? (
      <p className="contact-form__error" id={errorId(name)}>
        {errors[name]}
      </p>
    ) : null

  if (status === 'sent') {
    return (
      <div className="contact-form__done" role="status">
        <h3>Recibimos tu mensaje.</h3>
        <p>Te responderemos al correo que nos dejaste.</p>
        <button type="button" className="button button--secondary" onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className="contact-form" noValidate onSubmit={onSubmit} aria-busy={status === 'sending'}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor={fieldId('nombre')}>Nombre</label>
          <input
            id={fieldId('nombre')}
            name="nombre"
            autoComplete="name"
            required
            value={data.nombre}
            aria-invalid={!!errors.nombre}
            aria-describedby={describedBy('nombre')}
            onChange={(e) => update('nombre', e.target.value)}
          />
          {error('nombre')}
        </div>
        <div className="contact-form__field">
          <label htmlFor={fieldId('empresa')}>
            Empresa <span className="contact-form__optional">(opcional)</span>
          </label>
          <input
            id={fieldId('empresa')}
            name="empresa"
            autoComplete="organization"
            value={data.empresa}
            onChange={(e) => update('empresa', e.target.value)}
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor={fieldId('correo')}>Correo</label>
          <input
            id={fieldId('correo')}
            name="correo"
            type="email"
            autoComplete="email"
            required
            value={data.correo}
            aria-invalid={!!errors.correo}
            aria-describedby={describedBy('correo')}
            onChange={(e) => update('correo', e.target.value)}
          />
          {error('correo')}
        </div>
        <div className="contact-form__field">
          <label htmlFor={fieldId('telefono')}>
            Teléfono <span className="contact-form__optional">(opcional)</span>
          </label>
          <input
            id={fieldId('telefono')}
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={data.telefono}
            aria-invalid={!!errors.telefono}
            aria-describedby={describedBy('telefono')}
            onChange={(e) => update('telefono', e.target.value)}
          />
          {error('telefono')}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor={fieldId('servicio')}>
          ¿Qué te interesa? <span className="contact-form__optional">(opcional)</span>
        </label>
        <select
          id={fieldId('servicio')}
          name="servicio"
          value={data.servicio}
          onChange={(e) => update('servicio', e.target.value)}
        >
          <option value="">Todavía no lo sé</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor={fieldId('mensaje')}>Cuéntanos qué necesitas</label>
        <textarea
          id={fieldId('mensaje')}
          name="mensaje"
          rows={5}
          required
          value={data.mensaje}
          aria-invalid={!!errors.mensaje}
          aria-describedby={describedBy('mensaje')}
          onChange={(e) => update('mensaje', e.target.value)}
        />
        {error('mensaje')}
      </div>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label>
          No llenar
          <input name="sitio" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="contact-form__consent">
        <p className="contact-form__notice" id={`${id}-aviso`}>
          Usamos estos datos solo para responder tu consulta y no los compartimos
          con terceros para fines comerciales, conforme a la Ley 81 de 2019 de
          protección de datos personales de Panamá. Puedes pedir acceso,
          rectificación, cancelación u oposición en cualquier momento.
        </p>
        <div className="contact-form__check">
          <input
            id={fieldId('consentimiento')}
            name="consentimiento"
            type="checkbox"
            required
            checked={data.consentimiento}
            aria-invalid={!!errors.consentimiento}
            aria-describedby={describedBy('consentimiento', `${id}-aviso`)}
            onChange={(e) => update('consentimiento', e.target.checked)}
          />
          <label htmlFor={fieldId('consentimiento')}>
            Autorizo a Umbral Technologies a tratar mis datos según el{' '}
            <a href={privacyHref}>aviso de privacidad</a>.
          </label>
        </div>
        {error('consentimiento')}
      </div>

      <div className="contact-form__actions">
        <button type="submit" className="button button--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        </button>
        <div role="status" aria-live="polite" className="contact-form__status">
          {status === 'failed' &&
            'No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo en unos minutos.'}
        </div>
      </div>
    </form>
  )
}
