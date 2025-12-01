import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hush-purple': 'var(--color-hush-purple)',
        'hush-purple-light': 'var(--color-hush-purple-light)',
        'hush-purple-hover': 'var(--color-hush-purple-hover)',
        'hush-dark-bg': 'var(--color-hush-dark-bg)',
        'hush-dark-element': 'var(--color-hush-dark-element)',
        'hush-dark-outer': 'var(--color-hush-dark-outer)',
        'hush-text-primary': 'var(--color-hush-text-primary)',
        'hush-text-accent': 'var(--color-hush-text-accent)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'purple-glow': 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(167, 139, 250, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(167, 139, 250, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
