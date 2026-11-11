import { company } from '../../content/company'
import { ContactForm, type ContactFormProps } from '../ContactForm/ContactForm'
import './ContactSection.css'

export type ContactSectionProps = ContactFormProps

export function ContactSection(props: ContactSectionProps) {
  return (
    <section className="section section--surface contact" id="contacto" aria-labelledby="contacto-titulo">
      <div className="section__inner contact__grid">
        <div className="contact__intro">
          <h2 className="section__title" id="contacto-titulo">
            Cuéntanos qué te quita tiempo.
          </h2>
          <p className="section__intro">
            Descríbenos el problema con tus palabras. Te respondemos con
            franqueza si podemos ayudarte y cómo lo haríamos.
          </p>
          {company.email && (
            <p className="contact__direct">
              ¿Prefieres el correo?{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          )}
        </div>
        <div className="contact__form">
          <ContactForm {...props} />
        </div>
      </div>
    </section>
  )
}
