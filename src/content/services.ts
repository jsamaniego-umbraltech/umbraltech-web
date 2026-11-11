export type ServiceMotif = 'arc' | 'dot' | 'bars' | 'frame' | 'lens'

export interface Service {
  id: string
  title: string
  summary: string
  includes: readonly string[]
  motif: ServiceMotif
}

/**
 * Servicios confirmados en PRODUCT.md. El texto es copy propuesto: no contiene
 * clientes, cifras ni resultados.
 */
export const services: readonly Service[] = [
  {
    id: 'software-a-la-medida',
    title: 'Software a la medida',
    summary:
      'Sistemas web y aplicaciones que siguen la forma en que opera tu empresa, en lugar de obligarla a adaptarse a una herramienta genérica.',
    includes: [
      'Levantamiento de requisitos',
      'Desarrollo web y móvil',
      'Soporte y evolución',
    ],
    motif: 'arc',
  },
  {
    id: 'automatizacion-e-integraciones',
    title: 'Automatización e integraciones',
    summary:
      'Conectamos los sistemas que ya usas y quitamos el trabajo repetitivo entre hojas de cálculo, correo y software.',
    includes: [
      'Integraciones por API',
      'Automatización de procesos',
      'Reportes automáticos',
    ],
    motif: 'dot',
  },
  {
    id: 'facturacion-electronica',
    title: 'Facturación electrónica',
    summary:
      'Integramos la facturación electrónica de Panamá con tu sistema de ventas para que emitir una factura no sea un paso aparte.',
    includes: [
      'Integración con tu sistema',
      'Pruebas y validación',
      'Acompañamiento en la puesta en marcha',
    ],
    motif: 'bars',
  },
  {
    id: 'sitios-web',
    title: 'Sitios web y presencia digital',
    summary:
      'Sitios rápidos, accesibles y fáciles de mantener, pensados para que un cliente entienda qué haces y te escriba.',
    includes: ['Sitio corporativo', 'Landing pages', 'Dominio y hosting'],
    motif: 'frame',
  },
  {
    id: 'analisis-de-sistemas',
    title: 'Análisis de sistemas con enfoque en banca',
    summary:
      'Revisamos y documentamos sistemas existentes con el rigor de los entornos bancarios: procesos, riesgos y requisitos claros.',
    includes: [
      'Levantamiento y documentación',
      'Análisis de procesos',
      'Requisitos para proveedores',
    ],
    motif: 'lens',
  },
]
