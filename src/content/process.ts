export interface ProcessStep {
  title: string
  description: string
  outcome: string
}

export const processSteps: readonly ProcessStep[] = [
  {
    title: 'Diagnóstico',
    description:
      'Conversamos con quienes hacen el trabajo y miramos cómo opera hoy tu empresa antes de proponer nada.',
    outcome: 'Un mapa del problema y de lo que vale la pena resolver primero.',
  },
  {
    title: 'Propuesta',
    description:
      'Definimos alcance, plazos y costo por escrito, en lenguaje de negocio y sin letra pequeña.',
    outcome: 'Un documento que puedes comparar y aprobar.',
  },
  {
    title: 'Construcción',
    description:
      'Entregamos por partes que puedes probar. Cada entrega se revisa contigo antes de seguir.',
    outcome: 'Software funcionando desde las primeras semanas.',
  },
  {
    title: 'Acompañamiento',
    description:
      'Ponemos el sistema en marcha, capacitamos a tu equipo y seguimos disponibles para ajustes.',
    outcome: 'Un sistema que tu equipo usa de verdad.',
  },
]
