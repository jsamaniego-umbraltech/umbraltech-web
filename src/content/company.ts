/**
 * Datos de la empresa. Los valores `null` están pendientes de confirmar por
 * Umbral Technologies y no se inventan: la UI muestra un texto neutro mientras tanto.
 */
export const company = {
  name: 'Umbral Technologies',
  domain: 'umbraltech.net',
  country: 'Panamá',
  /** Razón social registrada. PENDIENTE. */
  legalName: null as string | null,
  /** RUC. PENDIENTE. */
  ruc: null as string | null,
  /** Correo público de contacto y para ejercer derechos sobre datos personales. */
  email: 'admin@umbraltech.net' as string | null,
  /** Endpoint del Worker que recibe el formulario y lo envía a admin@umbraltech.net. */
  contactEndpoint: '/api/contacto',
}
