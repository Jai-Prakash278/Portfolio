/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      colors: {
        background: 'var(--bg)',
        'background-secondary': 'var(--bg-secondary)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          bright: 'var(--accent-bright)',
          soft: 'var(--accent-soft)',
          border: 'var(--accent-border)',
          glow: 'var(--accent-glow)',
        },
        themeborder: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        }
      }
    },
  },
  plugins: [],
}
