/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        'system-bg': '#0a0a0a',
        'system-success': '#a7f3d0',
        'system-error': '#fecaca',
        'system-info': '#bfdbfe',
        'system-infra': '#ddd6fe',
        'pastel-violet': '#c4b5fd',
        'pastel-mint': '#6ee7b7',
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
