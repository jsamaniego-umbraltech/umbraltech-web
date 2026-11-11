// Tailwind v3: en tailwind.config.js -> presets: [require('./tailwind-preset')]
// Requiere importar umbral.css (las clases leen sus variables y cambian solas con el tema).
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--u-bg)',
        surface: 'var(--u-surface)',
        border: 'var(--u-border)',
        text: { DEFAULT: 'var(--u-text)', 2: 'var(--u-text-2)', muted: 'var(--u-text-muted)' },
        primary: { DEFAULT: 'var(--u-primary)', hover: 'var(--u-primary-hover)', on: 'var(--u-on-primary)' },
        accent: 'var(--u-accent)',
        error: 'var(--u-error)',
        warning: 'var(--u-warning)',
        success: 'var(--u-success)',
        verde: { 900: '#0E1F16', 800: '#1A2E23', 700: '#146C3F', 600: '#17804A', 500: '#1E9E5A', 400: '#3DDC84', 50: '#EEF4EF' },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: { sm: '6px', md: '10px', lg: '16px' },
    },
  },
};
