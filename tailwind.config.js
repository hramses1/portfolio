/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-bg': '#f8fafc',
        'tech-card': '#ffffff',
        'tech-primary': '#4f46e5', // Indigo
        'tech-success': '#10b981', // Emerald
        'tech-info': '#3b82f6',    // Blue
        'tech-infra': '#8b5cf6',   // Violet
        'tech-text': '#1e293b',
        'tech-text-muted': '#64748b',
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
