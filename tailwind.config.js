export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        bg: 'var(--color-bg)',
        'card-bg': 'var(--color-card-bg)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
      },
    },
  },
  plugins: [],
}
