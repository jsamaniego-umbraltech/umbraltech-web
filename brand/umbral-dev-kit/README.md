# Kit de desarrollo · Umbral Technologies

Fuente de verdad: `tokens.json`. Si cambia un color, cámbialo ahí y en `umbral.css`.

| Archivo | Para qué |
|---|---|
| `tokens.json` | Valores de marca (colores, tipografía, espaciado). Lo pueden leer front, apps móviles, reportes en Python o plantillas de Spring. |
| `umbral.css` | Variables CSS con tema claro y oscuro. Se importa una vez en el layout raíz. |
| `tailwind-preset.js` | Preset para Tailwind v3. |
| `tailwind-v4-theme.css` | Equivalente para Tailwind v4. |
| `assets/` | Logos SVG, favicon e ícono de app. |

## Reglas de uso
- Botones y enlaces en tema claro: `primario` (#17804A). **No uses #1E9E5A con texto blanco**: no alcanza el contraste mínimo de legibilidad.
- En tema oscuro, el botón primario es verde luz (#3DDC84) con texto oscuro.
- El verde luz es para acentos y datos destacados, no para bloques grandes de fondo.
- Tipografía: Sora para interfaz; JetBrains Mono para montos, códigos y tablas numéricas.
- Pon el logo de `assets/`, no lo recrees con texto.

## Ejemplo (Next.js)
```tsx
// app/layout.tsx
import './umbral.css';
export default function RootLayout({ children }) {
  return (<html lang="es"><body>{children}</body></html>);
}
// Uso con Tailwind
<button className="bg-primary text-on-primary hover:bg-primary-hover rounded-md px-5 min-h-11">Crear factura</button>
```
