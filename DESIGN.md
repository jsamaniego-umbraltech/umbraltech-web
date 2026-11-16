---
name: Umbral Technologies
description: Programa de identidad bancaria modernista para una empresa panameña de software; solo tema oscuro.
colors:
  accent: "#3ddc84"
  accent-hover: "#5fe69c"
  on-accent: "#0e1f16"
  bg: "#0e1f16"
  surface: "#1a2e23"
  surface-2: "#223a2d"
  border: "#2a4334"
  border-control: "#7c9686"
  text: "#eef4ef"
  text-2: "#a9c2b2"
  text-muted: "#7c9686"
  error: "#f97066"
  warning: "#fdb022"
typography:
  display:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 1.45rem + 4.6vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.8vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.42vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.35
  body-lg:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.19vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Sora Variable', 'Sora', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.6
  mono-data:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
rounded:
  sm: "6px"
  md: "10px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-8: "32px"
  space-10: "40px"
  space-12: "48px"
  space-16: "64px"
  section: "clamp(4rem, 2.5rem + 6vw, 8rem)"
  gutter: "clamp(1.25rem, 0.5rem + 3.5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "48px"
  service-index-band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
  service-row:
    textColor: "{colors.text}"
    typography: "{typography.title}"
    padding: "40px 0 48px"
  demo-frame:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.mono-data}"
    rounded: "{rounded.sm}"
  site-header:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-2}"
    height: "72px"
---

# Design System: Umbral Technologies

## Overview

**Creative North Star: "El informe anual de una institución seria"**

El sitio se lee como un programa de identidad bancaria modernista latinoamericano: una grilla maestra visible sobre un campo verde muy oscuro, titulares en Sora bold a escala de cartel con tracking cerrado y una única figura geométrica, el arco U y el punto del logo. La densidad es editorial, no de panel de control: mucho aire vertical entre secciones, reglas de 1px como estructura y casi ningún relleno de color.

Cada sección cambia de motivo geométrico sin salir de la misma grilla: hairlines de columna en el Hero y en las secciones de grilla, filas de índice en Servicios, pantallas de datos en Portafolio, una regla continua con un punto por etapa en Cómo trabajamos. El verde luz aparece poco y siempre con función.

El mundo rechaza explícitamente la landing de agencia: titular centrado, fila de tarjetas iguales, iconografía genérica, brillo de color.

**Key Characteristics:**
- Solo tema oscuro, también en `/privacidad`.
- Grilla maestra de 4 / 8 / 12 columnas, visible como hairlines.
- Sora bold monumental; JetBrains Mono solo para datos.
- El arco U y el punto del logo son las únicas figuras.
- Plano: profundidad por tonos de superficie y reglas de 1px, nunca por sombras.

## Colors

Una paleta monocroma de verdes profundos con un único verde luz que actúa como señal.

### Primary
- **Verde Señal** (accent): el único color de acento. CTA primario, enlaces, el punto del arco, el último punto de las secuencias, la regla que se enciende al hover/foco, el marcador de listas legales, la selección de texto y el anillo de foco. Contraste 9.6 sobre bg.
- **Verde Señal Claro** (accent-hover): solo el estado hover del CTA primario.
- **Tinta sobre Señal** (on-accent): texto y check sobre superficies en acento (9.6:1).

### Neutral
- **Campo Verde-900** (bg): fondo base de página, cabecera, pie, campos de formulario y marcos de demo.
- **Pliego Verde-800** (surface): segundo nivel del ritmo; secciones alternas y la banda del índice de servicios. También es el color de las hairlines de columna sobre bg.
- **Pliego Hondo** (surface-2): tercer nivel derivado, entre surface y border. Hoy dibuja las hairlines de columna dentro de las secciones en surface.
- **Regla** (border): separadores, reglas de 1px, marcos y guías decorativas. No es borde de control.
- **Borde de Control** (border-control): bordes de inputs, select, checkbox, botón secundario y botón de menú (≥ 3:1 sobre bg y surface).
- **Texto** (text): titulares y texto principal.
- **Texto Secundario** (text-2): ledes, intros, descripciones, segunda mitad tonal del titular del Hero.
- **Texto Tenue** (text-muted): metadatos (números de etapa, rótulo "Ejemplo · datos ficticios", línea legal del pie). Solo sobre bg (5.4) o surface (4.5).

### Estados
- **Error** (error): bordes inválidos y mensajes de error del formulario.
- **Aviso** (warning): estado "Revisar" en demos y datos legales pendientes.

`--accent-ink` (verde-600) existe en los tokens solo para fondos blancos (5.0 sobre #FFFFFF); el sitio no lo usa.

### Named Rules
**La regla de la Señal Escasa.** El acento marca acción, enlace o estado activo; nunca rellena áreas, nunca forma degradados, nunca brilla. Sin glow ni sombras de color.

**La regla del Ritmo de Pliegos.** Las secciones alternan bg y surface (Hero en bg con banda de índice en surface, Servicios bg, Portafolio surface, Cómo trabajamos bg, Contacto surface, Pie bg). surface-2 es el tercer nivel derivado, no un cuarto fondo de sección.

**La regla del Tenue Prohibido.** text-muted nunca va sobre surface-2 (3.8:1, falla AA).

## Typography

**Display Font:** Sora Variable (con system-ui, -apple-system, Segoe UI)
**Body Font:** Sora Variable
**Label/Mono Font:** JetBrains Mono Variable (con ui-monospace)

Ambas autoalojadas vía `@fontsource-variable`. **Character:** una geométrica bold de tracking cerrado que funciona como masa gráfica, acompañada de una mono técnica que solo aparece donde hay datos reales.

### Hierarchy
- **Display** (700, escala fluida hasta 5.75rem, interlineado 0.98, tracking -0.035em): solo el titular del Hero, en 9 de 12 columnas. Una segunda frase puede ir en text-2 dentro del mismo titular.
- **Headline** (700, hasta 3.25rem, 1.15, -0.03em): títulos de sección y el H1 de `/privacidad`; también títulos de fila de servicio en escritorio.
- **Title** (700, hasta 2.125rem, 1.15, -0.02em): filas de servicio en móvil, proyectos del portafolio, etapas del proceso, confirmación del formulario.
- **Lede** (400, hasta 1.5rem, 1.35): línea de apoyo del Hero, máx. 40ch, en text-2.
- **Body-lg** (400, hasta 1.1875rem, 1.6): intros de sección (máx. 48ch) y resumen de servicio (máx. 52ch), en text-2.
- **Body** (400, 1rem, 1.6): texto corrido; textos legales a máx. 68ch.
- **Label** (600, 0.875rem): etiquetas de formulario, términos de definición, cabecera de marco de demo.
- **Mono-data** (400, 0.875rem, cifras tabulares): tablas de demo y números de etapa.

### Named Rules
**La regla de la Mono Honesta.** JetBrains Mono solo para datos, códigos, montos, años y números de secuencia. Nunca para titulares, etiquetas ni decoración.

**La regla del Titular Desnudo.** Ningún titular lleva eyebrow, kicker ni rótulo encima. El título abre la sección.

## Layout

Una sola grilla maestra mobile-first: 4 columnas con gap de 16px; 8 columnas con gap de 24px desde 48rem; 12 columnas desde 64rem. Contenedor máximo de 90rem con gutter fluido (20px a 64px). Las secciones respiran con un padding vertical fluido (64px a 128px).

Las columnas se hacen visibles: en el Hero como hairlines de 1px en surface; en las secciones marcadas como de grilla (Portafolio, Cómo trabajamos, Contacto) como hairlines al inicio de cada columna, en surface sobre bg y en surface-2 sobre surface.

Patrón de cabecera de sección en escritorio: título en columnas 1-6, intro en 8-12, alineados por la base. Portafolio alterna el lado de la pantalla (7 columnas de demo, 4-5 de texto). Contacto: intro fija (sticky) en 1-5, formulario en 7-12. Proceso: cuatro columnas en escritorio, vertical en móvil.

**La regla de la Grilla Única.** Todo se coloca en las columnas de la grilla maestra; cada sección cambia de motivo, no de grilla.

## Elevation & Depth

Sistema plano. No hay `box-shadow` en ningún lugar. La profundidad se construye con el ritmo tonal bg → surface → surface-2 y con reglas de 1px en border. La cabecera es sticky y se separa solo con una regla inferior.

**La regla del Plano Absoluto.** Sin sombras, sin glow, sin desenfoques. Si algo necesita separarse, recibe una regla de 1px o un cambio de pliego.

## Shapes

Esquinas pequeñas y contenidas: 10px en botones y botón de menú, 6px en campos de formulario, marcos de demo y skip link; el checkbox también usa 6px. Las secciones, filas e índices no tienen esquinas: son bandas a sangre con reglas de 1px. Los únicos círculos son puntos de 8-11px que derivan del punto del logo (estados de demo, etapas del proceso, pasos del contacto), en contorno text-2 y relleno acento solo en el último o activo.

**La regla de la Figura Única.** El arco U y el punto del logo son las únicas figuras del sitio. No hay set de íconos. Solo se dibujan trazos funcionales mínimos de 1.5-1.75px (menú/cerrar, flecha de enlace).

## Components

### Buttons
Contenidos y firmes.
- **Shape:** esquinas suaves (10px), alto mínimo 48px, padding horizontal 24px, Sora 600.
- **Primary:** fondo acento con texto on-accent. Uno por vista: "Agenda una conversación" en el Hero, "Escríbenos" en la cabecera, "Enviar mensaje" en el formulario.
- **Hover / Focus:** hover pasa a acento claro (150ms, ease-out). Foco global: contorno de 2px en acento con 3px de separación.
- **Secondary:** transparente, borde border-control, texto text; hover lleva el borde a text.

### Inputs / Fields
- **Style:** fondo bg, borde 1px border-control, esquinas de 6px, alto mínimo 48px, cursor de texto en acento. Select con chevron de trazo en text-2.
- **Hover:** borde a text-2. **Focus:** contorno de 2px y borde en acento, sin separación.
- **Error:** borde y mensaje en error. **Disabled (enviar):** opacidad 0.6.
- **Checkbox:** propio, 20px, borde border-control; marcado con relleno acento y check on-accent.
- El aviso de privacidad (Ley 81/2019) va sobre el checkbox, separado por una regla superior.

### Navigation
- **Cabecera:** sticky, fondo bg, regla inferior, alto 72px; logo del kit a la izquierda.
- **Escritorio:** enlaces en label (0.875rem) text-2; al hover pasan a text y una regla de 1px en acento se dibuja de izquierda a derecha (300ms).
- **Móvil:** botón de menú de 48px con borde border-control; el panel desplegado es una lista de filas separadas por reglas, a 1.1875rem.
- **Pie:** fondo bg con regla superior, logo grande, enlaces en text que pasan a acento con subrayado; línea legal en text-muted.

### Banda de índice de servicios (firma)
Al pie del primer viewport, los cinco servicios como banda en surface: filas apiladas en móvil, cinco celdas separadas por reglas verticales en escritorio. Cada enlace enciende su regla superior en acento (scaleX, 300ms) al hover/foco.

### Fila de servicio (firma)
Los servicios son filas planas de índice, nunca tarjetas: regla superior como único borde, título en columnas 1-5 y cuerpo en 6-12 en escritorio; los entregables como tres columnas con regla superior. La regla superior se enciende en acento al hover/foco dentro de la fila. Enlace en acento con flecha de trazo que se desplaza 3px.

### Marco de demo (portafolio)
Cada proyecto de ejemplo es una pantalla trabajando: marco en bg con borde border y esquinas de 6px, cabecera con nombre y rótulo "Ejemplo · datos ficticios" en text-muted, tabla en mono-data con cifras tabulares y estados con punto (acento = listo, warning = revisar, contorno = pendiente). Bajo 30rem, cada fila se parte en dos líneas.

### Secuencia con punto
Cómo trabajamos y los pasos del contacto usan una regla continua con un punto por etapa; el último punto se rellena en acento. Número de etapa en mono-data text-muted.

### Arco Umbral
El arco U y el punto del logo a escala de cartel, misma geometría que el kit. Trazo en text, punto en acento, guía en border. Se dibuja una vez al cargar (1400ms, luego el punto en 500ms); con `prefers-reduced-motion` aparece estático.

### Logo y rasters de marca
- Se usan los logos del kit sin alterar; nunca se recrean con texto.
- `src/assets/brand/logo-umbral-oscuro.svg`: copia de `brand/umbral-dev-kit/assets/logo-horizontal-fondo-oscuro-outlined.svg` con solo el viewBox recortado y el rect de fondo eliminado.
- `brand/umbral-dev-kit/assets/logo-*-outlined.svg`: copias con el texto convertido a trazados desde Inter Bold/Regular (desviación de glifo ≤ 1px frente al original).
- `public/og/og-1200x630.png` y `public/og/og-1080x1080.png`: renderizados con Playwright desde `brand/umbral-dev-kit/assets/logo-horizontal-fondo-oscuro.svg` sin modificar (Inter 700/400 cargadas), centrado sobre bg.

## Do's and Don'ts

### Do:
- **Do** mantener el sitio solo en tema oscuro, incluida `/privacidad`.
- **Do** alternar secciones entre bg y surface y usar surface-2 como tercer nivel derivado.
- **Do** reservar el acento para CTA, enlaces y detalles de estado; un CTA primario por vista.
- **Do** usar Sora y JetBrains Mono autoalojadas vía `@fontsource-variable`; mono solo para datos, códigos y números de secuencia.
- **Do** separar con reglas de 1px y cambios de pliego, nunca con sombras.
- **Do** colocar todo en la grilla maestra de 4 / 8 / 12 columnas.
- **Do** rotular todo proyecto de portafolio como ejemplo con datos ficticios.
- **Do** desactivar el dibujo del arco y las transiciones de reglas con `prefers-reduced-motion`.

### Don't:
- **Don't** añadir glow, sombras de color, degradados de acento ni rellenos grandes en verde luz.
- **Don't** poner eyebrows, kickers ni rótulos sobre los titulares.
- **Don't** introducir un set de íconos ni figuras distintas del arco U y el punto del logo.
- **Don't** convertir los servicios en tarjetas; son filas planas de índice.
- **Don't** mostrar clientes, logos, testimonios ni cifras reales en el portafolio; solo demos rotuladas.
- **Don't** usar text-muted sobre surface-2.
- **Don't** usar border como borde de control; los campos usan border-control.
- **Don't** usar la mono en titulares o etiquetas.
- **Don't** centrar el titular del Hero ni montar filas de tarjetas iguales.
