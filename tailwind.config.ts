import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:    '#1e3a6e',  // brand dark navy (logo text, sofa, decor)
        accent:     '#4db8e8',  // sky blue (logo "&", wave mural accents)
        ocean:      '#1e52d4',  // cobalt blue (chairs, trays, vibrant brand)
        'bg-light': '#f6f7f8',
        navy:       '#1e3a6e',
        teal:       '#4db8e8',
        sand:       '#f6f7f8',
        offwhite:   '#f6f7f8',
        charcoal:   '#334155',
        coral:      '#1e3a6e',
      },
      fontFamily: {
        sans:    ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:  '0.5rem',
        xl:  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #152c54 0%, #1e3a6e 55%, #264d8a 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.7s ease-out both',
        'fade-up-d1': 'fade-up 0.7s 0.10s ease-out both',
        'fade-up-d2': 'fade-up 0.7s 0.20s ease-out both',
        'fade-up-d3': 'fade-up 0.7s 0.32s ease-out both',
        'fade-up-d4': 'fade-up 0.7s 0.44s ease-out both',
        'fade-in':    'fade-in 0.5s ease-out both',
        'slide-down': 'slide-down 0.28s ease-out both',
        'scale-in':   'scale-in 0.3s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
