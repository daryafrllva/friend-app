import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '150': '37.5rem',
        '180': '45rem',
        '200': '50rem',
        '300': '75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
})