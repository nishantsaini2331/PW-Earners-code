/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#E65100', // Warm terracotta ember
          50: '#fff8f1',
          100: '#feeedc',
          200: '#fcd9b6',
          300: '#f9bd85',
          400: '#f5964f',
          500: '#e65100',
          600: '#cc3e00',
          700: '#a32f00',
          800: '#802607',
          900: '#68220a',
          foreground: '#ffffff',
        },
        ink: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#868E96',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121417',
        },
        sage: {
          50: '#f4f7f5',
          100: '#e5ece7',
          500: '#466d58',
          600: '#385746',
        },
        sand: {
          50: '#FBFBFA',
          100: '#F5F5F0',
          200: '#ECECE5',
          300: '#DFDFD6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 35px -10px rgba(18, 20, 23, 0.08)',
      },
    },
  },
  plugins: [],
}
