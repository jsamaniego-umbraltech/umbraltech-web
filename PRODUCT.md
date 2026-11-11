# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primarios:** dueños y gerentes de pymes y mipymes en Panamá que necesitan software,
  automatizar procesos manuales o cumplir con la factura electrónica, y que buscan un
  proveedor técnico local en quien confiar.
- **Secundarios:** empresas medianas y grandes, y entidades del sector público, con
  necesidades de desarrollo, integración o análisis de sistemas.
- Situación típica: evalúan proveedores desde el móvil o el escritorio, comparan con
  otras opciones y deciden si vale la pena escribir o agendar una conversación.
- No se nombra a APEDE ni a ningún gremio en el sitio.

## Product Purpose

Landing page de Umbral Technologies en umbraltech.net. Explica qué hace la empresa,
cómo trabaja y lleva al visitante a contactarla. El éxito es un mensaje de contacto
calificado (formulario o canal directo) de una empresa que encaja con los servicios.

## Positioning

Empresa panameña de desarrollo de software fundada por un profesional con cerca de
11 años de experiencia en software, incluida experiencia en sistemas de banca.
Hace software a la medida y análisis de sistemas con criterio de entornos exigentes
(banca), al alcance de una pyme.

## Capabilities and Constraints

Servicios confirmados (no añadir otros sin aprobación):

1. Software a la medida.
2. Automatización e integraciones.
3. Facturación electrónica.
4. Sitios web y presencia digital.
5. Análisis de sistemas de software con enfoque en la banca.

Restricciones:

- Stack: React + TypeScript + Vite; Vitest, Testing Library, Storybook, Playwright.
- Hosting: Cloudflare Workers con static assets, dominio umbraltech.net.
- Una sola página más `/privacidad`, mediante la entrada múltiple de Vite (sin router).
- Secciones: Hero, Servicios, Portafolio, Cómo trabajamos, Contacto, Footer.
- Formulario de contacto con aviso de privacidad conforme a la Ley 81 de 2019 (Panamá).
- Sin dependencias pesadas.
- Formulario: POST a `/api/contacto` en el Worker, que envía el mensaje con Resend a
  admin@umbraltech.net (el MX del dominio es Google Workspace; no usar Email Routing).

## Brand Commitments

- Nombre: **Umbral Technologies** (como en el logo y `brand/umbral-dev-kit/tokens.json`).
- Kit de marca en `brand/umbral-dev-kit/`: logo horizontal (fondo claro y oscuro),
  favicon, ícono de app y tokens. Usar los logos del kit; no recrearlos con texto.
- El sitio usa **solo el tema oscuro** de la marca, incluida `/privacidad`.
- Idioma: español de Panamá, tuteo ("tú", "tu empresa"). Credenciales con carácter, no tipo currículum.

## Evidence on Hand

- Experiencia real: cerca de 11 años del fundador en desarrollo de software, incluida
  banca. Se puede afirmar como experiencia del equipo.
- **No hay casos de clientes publicables:** el trabajo previo pertenece a las empresas
  donde se hizo. No inventar clientes, logos, testimonios, cifras ni resultados.
- El portafolio, si se muestra, usa proyectos de demostración rotulados como ejemplo.

## Product Principles

1. Demostrar criterio técnico con claridad, no con jerga ni promesas.
2. Cero afirmaciones inventadas: lo que no es verificable no se publica.
3. Cercanía local: una empresa panameña que habla el idioma del negocio del cliente.
4. El camino al contacto siempre está a un paso.

## Accessibility & Inclusion

WCAG 2.2 AA: contraste mínimo 4.5:1 en texto, foco visible, navegación por teclado,
`prefers-reduced-motion` respetado, mobile-first.
