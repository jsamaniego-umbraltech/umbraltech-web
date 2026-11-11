# Umbral Technologies – Landing page
Dominio: umbraltech.net
Stack: React + TypeScript + Vite. Hosting: Cloudflare Workers con static assets.
Páginas: `/` y `/privacidad` mediante la entrada múltiple de Vite (sin router).
Formulario: `worker/index.ts` atiende POST `/api/contacto` y envía con Resend a
admin@umbraltech.net. El correo del dominio es Google Workspace: no activar Email Routing.
Público: pymes, mipymes y empresas medianas y grandes de Panamá, y sector público.
No nombrar a APEDE ni a otros gremios. Idioma: español.
Contexto de producto: PRODUCT.md. Sistema visual: DESIGN.md (se escribe al cerrar el build).

## Reglas
- Gitflow: trabajar SIEMPRE en feature/*; PR hacia develop. Nunca push a main/develop.
- Commits convencionales (feat:, fix:, chore:).
- No renombrar los jobs del CI: el ruleset de GitHub depende de sus nombres.
- Cada componente: archivo .tsx + story de Storybook + test con Vitest.
- Responsive mobile-first, accesible (WCAG AA), sin dependencias pesadas.
- Formulario de contacto con aviso de privacidad (Ley 81 de 2019, Panamá).
- No inventar clientes, testimonios, cifras ni casos. El portafolio usa proyectos de
  demostración rotulados como ejemplo.

## Marca
- Kit de marca en `brand/umbral-dev-kit/` (fuente: `tokens.json`). Usar sus logos; no
  recrearlos con texto. Las copias `logo-*-outlined.svg` tienen el texto en trazos.
- **Solo tema oscuro**, también en `/privacidad`. El ritmo visual alterna `--bg` y
  `--surface` (más `--surface-2` si hace falta); nada de secciones claras.
- `--accent` (#3DDC84) con moderación: CTA, enlaces y detalles. Sin glow.
- `--accent-ink` (#17804A) solo donde haga falta el verde sobre fondo claro (p. ej. imágenes OG
  o texto sobre superficies claras); nunca texto blanco sobre #1E9E5A.
- Colores, tipografía y espaciado viven solo en `src/styles/tokens.css`.
- Tipografía: Sora (interfaz) y JetBrains Mono (números, códigos), autoalojadas.

## Secciones
Hero, Servicios, Portafolio, Cómo trabajamos, Contacto, Footer.
