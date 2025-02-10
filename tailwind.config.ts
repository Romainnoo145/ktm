import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C1C1C', // Rich Black
          hover: '#2C2C2C',
        },
        secondary: {
          DEFAULT: '#111827', // Gray 900
          hover: '#1f2937',
        },
        accent: {
          DEFAULT: '#D4D4D4', // Soft Silver
          hover: '#BDBDBD',
        },
        background: {
          DEFAULT: '#FAFAFA', // Almost White
          alt: '#F5F5F5', // Light Gray
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config;
