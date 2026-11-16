/**
 * Proyectos de DEMOSTRACIÓN. No son clientes reales: Umbral no publica trabajo
 * hecho para empleadores anteriores. Todos los datos son ficticios y la UI los
 * rotula como ejemplo.
 */
export interface DemoRow {
  label: string
  value: string
  status: 'ok' | 'pending' | 'alert'
}

export interface DemoProject {
  id: string
  title: string
  serviceTitle: string
  problem: string
  solution: string
  demoTitle: string
  rows: readonly DemoRow[]
}

export const demoProjects: readonly DemoProject[] = [
  {
    id: 'conciliacion',
    title: 'Conciliación bancaria sin hojas de cálculo',
    serviceTitle: 'Automatización e integraciones',
    problem:
      'Una empresa cruza a mano cada mañana el estado de cuenta del banco con sus facturas cobradas.',
    solution:
      'Un proceso que lee los movimientos, los empareja con las facturas y deja a la vista solo lo que no cuadra.',
    demoTitle: 'Movimientos del día',
    rows: [
      { label: 'TRF 004812 · Cliente 0412', value: 'B/. 1,240.00', status: 'ok' },
      { label: 'ACH 771203 · Cliente 0187', value: 'B/. 318.50', status: 'ok' },
      { label: 'DEP 000931 · Sin referencia', value: 'B/. 75.00', status: 'alert' },
      { label: 'TRF 004817 · Cliente 0950', value: 'B/. 2,905.10', status: 'pending' },
    ],
  },
  {
    id: 'pedidos',
    title: 'Pedidos de ruta en el teléfono del vendedor',
    serviceTitle: 'Software a la medida',
    problem: 'Los vendedores anotan pedidos en papel y la bodega los recibe al final del día.',
    solution: 'Una app web que funciona sin señal y envía el pedido a bodega en cuanto hay conexión.',
    demoTitle: 'Ruta 3 · hoy',
    rows: [
      { label: 'Tienda 018', value: '14 líneas', status: 'ok' },
      { label: 'Tienda 022', value: '6 líneas', status: 'pending' },
      { label: 'Tienda 031', value: '3 líneas', status: 'ok' },
    ],
  },
  {
    id: 'facturacion',
    title: 'Factura electrónica desde el punto de venta',
    serviceTitle: 'Facturación electrónica',
    problem: 'Cada venta se registra en caja y luego se vuelve a digitar para facturar.',
    solution: 'El punto de venta emite la factura electrónica al cerrar la venta, sin un paso aparte.',
    demoTitle: 'Facturas emitidas',
    rows: [
      { label: 'FE 0000-1287', value: 'Autorizada', status: 'ok' },
      { label: 'FE 0000-1288', value: 'Autorizada', status: 'ok' },
      { label: 'FE 0000-1289', value: 'En envío', status: 'pending' },
    ],
  },
]
