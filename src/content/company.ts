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
  /** Correo para contacto y para ejercer derechos sobre datos personales. PENDIENTE. */
  email: null as string | null,
  /** Endpoint que recibe el formulario de contacto (POST JSON). */
  contactEndpoint: (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ?? null,
}
