import { processSteps as defaultSteps, type ProcessStep } from '../../content/process'
import './Process.css'

export interface ProcessProps {
  steps?: readonly ProcessStep[]
}

export function Process({ steps = defaultSteps }: ProcessProps) {
  return (
    <section className="section process" id="como-trabajamos" aria-labelledby="proceso-titulo">
      <div className="section__inner">
        <header className="section__header">
          <h2 className="section__title" id="proceso-titulo">
            Cómo trabajamos
          </h2>
          <p className="section__intro">
            Cuatro etapas, cada una con algo concreto en tus manos antes de pasar
            a la siguiente.
          </p>
        </header>
        <ol className="process__steps">
          {steps.map((step, i) => (
            <li key={step.title} className="process__step">
              <span className="process__number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__description">{step.description}</p>
              <p className="process__outcome">
                <span className="visually-hidden">Resultado: </span>
                {step.outcome}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
