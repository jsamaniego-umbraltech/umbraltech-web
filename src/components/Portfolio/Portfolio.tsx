import { demoProjects as defaultProjects, type DemoProject } from '../../content/portfolio'
import './Portfolio.css'

const statusLabel: Record<DemoProject['rows'][number]['status'], string> = {
  ok: 'Listo',
  pending: 'Pendiente',
  alert: 'Revisar',
}

export interface PortfolioProps {
  projects?: readonly DemoProject[]
}

export function Portfolio({ projects = defaultProjects }: PortfolioProps) {
  return (
    <section
      className="section section--surface portfolio"
      id="portafolio"
      aria-labelledby="portafolio-titulo"
    >
      <div className="section__inner">
        <header className="section__header">
          <h2 className="section__title" id="portafolio-titulo">
            Así se ve el trabajo
          </h2>
          <p className="section__intro">
            Proyectos de ejemplo, con datos ficticios, del tipo de problema que
            resolvemos. Nuestro trabajo anterior pertenece a quienes lo
            encargaron, así que no lo publicamos.
          </p>
        </header>

        <ul className="portfolio__list">
          {projects.map((project) => (
            <li key={project.id} className="portfolio__item">
              <article aria-labelledby={`proyecto-${project.id}`}>
                <figure className="portfolio__demo">
                  <figcaption className="portfolio__demo-head">
                    <span>{project.demoTitle}</span>
                    <span className="portfolio__tag">Ejemplo · datos ficticios</span>
                  </figcaption>
                  <table className="portfolio__table">
                    <thead className="visually-hidden">
                      <tr>
                        <th scope="col">Registro</th>
                        <th scope="col">Detalle</th>
                        <th scope="col">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.rows.map((row) => (
                        <tr key={row.label}>
                          <td>{row.label}</td>
                          <td className="portfolio__value">{row.value}</td>
                          <td>
                            <span className={`portfolio__status portfolio__status--${row.status}`}>
                              {statusLabel[row.status]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </figure>
                <div className="portfolio__text">
                  <h3 className="portfolio__title" id={`proyecto-${project.id}`}>
                    {project.title}
                  </h3>
                  <dl className="portfolio__facts">
                    <div>
                      <dt>El problema</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>La solución</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>Servicio</dt>
                      <dd>{project.serviceTitle}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
