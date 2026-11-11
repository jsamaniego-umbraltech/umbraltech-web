import { company } from '../../content/company'
import './PrivacyNotice.css'

const PENDING = 'dato pendiente de publicación'

export interface PrivacyNoticeProps {
  updated?: string
}

/**
 * Aviso de privacidad (Ley 81 de 2019 y su reglamento, Decreto Ejecutivo 285
 * de 2021). Borrador: requiere revisión legal y los datos de company.ts.
 */
export function PrivacyNotice({ updated = '10 de noviembre de 2026' }: PrivacyNoticeProps) {
  const contact = company.email ? (
    <a href={`mailto:${company.email}`}>{company.email}</a>
  ) : (
    <span className="privacy__pending">{PENDING}</span>
  )

  return (
    <article className="privacy" aria-labelledby="privacidad-titulo">
      <header className="privacy__header">
        <h1 id="privacidad-titulo">Aviso de privacidad</h1>
        <p className="privacy__updated">Última actualización: {updated}</p>
      </header>

      <div className="privacy__body">
        <p className="privacy__lead">
          Este aviso explica qué datos personales recogemos en {company.domain},
          para qué los usamos y cómo puedes ejercer tus derechos, conforme a la
          Ley 81 de 2019 sobre protección de datos personales de la República de
          Panamá y su reglamento.
        </p>

        <section aria-labelledby="p-responsable">
          <h2 id="p-responsable">Quién es responsable de tus datos</h2>
          <dl className="privacy__facts">
            <div>
              <dt>Responsable</dt>
              <dd>{company.legalName ?? company.name}</dd>
            </div>
            <div>
              <dt>RUC</dt>
              <dd>{company.ruc ?? <span className="privacy__pending">{PENDING}</span>}</dd>
            </div>
            <div>
              <dt>Contacto</dt>
              <dd>{contact}</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="p-datos">
          <h2 id="p-datos">Qué datos recogemos</h2>
          <p>
            Solo los que nos das en el formulario de contacto: nombre, correo,
            y de forma opcional empresa, teléfono, el servicio que te interesa y
            el mensaje que escribas. Este sitio no usa cookies de publicidad ni de
            seguimiento.
          </p>
        </section>

        <section aria-labelledby="p-finalidad">
          <h2 id="p-finalidad">Para qué los usamos</h2>
          <p>
            Para responder tu consulta y, si tú lo decides, preparar una propuesta
            de servicios. No los usamos para enviarte publicidad ni los vendemos o
            cedemos a terceros con fines comerciales.
          </p>
        </section>

        <section aria-labelledby="p-base">
          <h2 id="p-base">Con qué base legal</h2>
          <p>
            Tu consentimiento, que nos das al marcar la casilla de autorización
            del formulario. Puedes retirarlo en cualquier momento.
          </p>
        </section>

        <section aria-labelledby="p-terceros">
          <h2 id="p-terceros">Quién más puede tratarlos</h2>
          <p>
            Los proveedores técnicos que alojan este sitio y reciben el
            formulario, que actúan por nuestra cuenta y solo para ese fin. Algunos
            pueden procesar los datos fuera de Panamá con medidas de seguridad
            adecuadas.
          </p>
        </section>

        <section aria-labelledby="p-conservacion">
          <h2 id="p-conservacion">Cuánto tiempo los guardamos</h2>
          <p>
            Mientras dure la conversación o la relación comercial que surja de
            ella, y después solo el tiempo que exija la ley. Luego los eliminamos.
          </p>
        </section>

        <section aria-labelledby="p-derechos">
          <h2 id="p-derechos">Tus derechos</h2>
          <p>Puedes pedirnos en cualquier momento:</p>
          <ul>
            <li><strong>Acceso:</strong> saber qué datos tuyos tenemos.</li>
            <li><strong>Rectificación:</strong> corregir datos incorrectos o incompletos.</li>
            <li><strong>Cancelación:</strong> que eliminemos tus datos.</li>
            <li><strong>Oposición:</strong> que dejemos de usarlos para un fin concreto.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato de uso común.</li>
          </ul>
          <p>
            Escríbenos a {contact} indicando tu nombre y lo que solicitas. Si no
            quedas conforme con nuestra respuesta, puedes acudir a la Autoridad
            Nacional de Transparencia y Acceso a la Información (ANTAI).
          </p>
        </section>

        <section aria-labelledby="p-seguridad">
          <h2 id="p-seguridad">Seguridad</h2>
          <p>
            Este sitio se sirve solo por HTTPS y limitamos el acceso a tus datos a
            las personas que necesitan responder tu consulta.
          </p>
        </section>

        <section aria-labelledby="p-cambios">
          <h2 id="p-cambios">Cambios a este aviso</h2>
          <p>
            Si cambiamos este aviso, publicaremos la nueva versión en esta página
            con su fecha de actualización.
          </p>
        </section>
      </div>
    </article>
  )
}
