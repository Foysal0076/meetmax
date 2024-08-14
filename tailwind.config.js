/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
      fontFamily: {
        Roboto: ['var(--font-roboto)'],
      },
      blur: {
        sm: 'var(--backgroundblur-sm-backdrop-filter)',
        md: 'var(--backgroundblur-md-backdrop-filter)',
        lg: 'var(--backgroundblur-lg-backdrop-filter)',
        xl: 'var(--backgroundblur-xl-backdrop-filter)',
      },
      backgroundImage: {
        'chevron-down': 'url(/assets/images/chevron-down.svg)',
      },
      backgroundPosition: {
        'left-2': 'left .5rem center',
        'left-4': 'left 1rem center',
        'left-6': 'left 1.5rem center',
        'left-8': 'left 2rem center',
        'right-2': 'right .5rem center',
        'right-4': 'right 1rem center',
        'right-6': 'right 1.5rem center',
        'right-8': 'right 2rem center',
      },
      fontSize: {
        'heading-1': [
          '1.875rem',
          {
            lineHeight: '2.875rem',
            fontWeight: 900,
          },
        ],
        'heading-2': [
          '1.625rem',
          {
            lineHeight: '2.5rem',
            fontWeight: 700,
          },
        ],
        'heading-3': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: 700,
          },
        ],
        'display': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: 400,
          },
        ],
        'body-1': [
          '.875rem',
          {
            lineHeight: '1.375rem',
            fontWeight: 400,
          },
        ],
        'body-2': [
          '.8125rem',
          {
            lineHeight: '1.125rem',
            fontWeight: 400,
          },
        ],
        'body-3': [
          '.75rem',
          {
            lineHeight: '1.125rem',
            fontWeight: 400,
          },
        ],
        'body-3': [
          '.625rem',
          {
            lineHeight: '1rem',
            fontWeight: 400,
          },
        ],
      },
      colors: {
        primary: {
          50: 'rgb(var(--colors-primary-50) / <alpha-value>)',
          100: 'rgb(var(--colors-primary-100) / <alpha-value>)',
          200: 'rgb(var(--colors-primary-200) / <alpha-value>)',
          300: 'rgb(var(--colors-primary-300) / <alpha-value>)',
          400: 'rgb(var(--colors-primary-400) / <alpha-value>)',
          500: 'rgb(var(--colors-primary-500) / <alpha-value>)',
          600: 'rgb(var(--colors-primary-600) / <alpha-value>)',
          700: 'rgb(var(--colors-primary-700) / <alpha-value>)',
          800: 'rgb(var(--colors-primary-800) / <alpha-value>)',
          900: 'rgb(var(--colors-primary-900) / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(var(--colors-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--colors-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--colors-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--colors-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--colors-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--colors-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--colors-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--colors-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--colors-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--colors-secondary-900) / <alpha-value>)',
        },

        danger: {
          50: 'rgb(var(--colors-danger-50) / <alpha-value>)',
          100: 'rgb(var(--colors-danger-100) / <alpha-value>)',
          200: 'rgb(var(--colors-danger-200) / <alpha-value>)',
          300: 'rgb(var(--colors-danger-300) / <alpha-value>)',
          400: 'rgb(var(--colors-danger-400) / <alpha-value>)',
          500: 'rgb(var(--colors-danger-500) / <alpha-value>)',
          600: 'rgb(var(--colors-danger-600) / <alpha-value>)',
          700: 'rgb(var(--colors-danger-700) / <alpha-value>)',
          800: 'rgb(var(--colors-danger-800) / <alpha-value>)',
          900: 'rgb(var(--colors-danger-900) / <alpha-value>)',
        },
        warning: {
          50: 'rgb(var(--colors-warning-50) / <alpha-value>)',
          100: 'rgb(var(--colors-warning-100) / <alpha-value>)',
          200: 'rgb(var(--colors-warning-200) / <alpha-value>)',
          300: 'rgb(var(--colors-warning-300) / <alpha-value>)',
          400: 'rgb(var(--colors-warning-400) / <alpha-value>)',
          500: 'rgb(var(--colors-warning-500) / <alpha-value>)',
          600: 'rgb(var(--colors-warning-600) / <alpha-value>)',
          700: 'rgb(var(--colors-warning-700) / <alpha-value>)',
          800: 'rgb(var(--colors-warning-800) / <alpha-value>)',
          900: 'rgb(var(--colors-warning-900) / <alpha-value>)',
        },
        neutral: {
          0: 'rgb(var(--colors-neutral-0) / <alpha-value>)',
          3: 'rgb(var(--colors-neutral-3) / <alpha-value>)',
          5: 'rgb(var(--colors-neutral-5) / <alpha-value>)',
          10: 'rgb(var(--colors-neutral-10) / <alpha-value>)',
          20: 'rgb(var(--colors-neutral-20) / <alpha-value>)',
          30: 'rgb(var(--colors-neutral-30) / <alpha-value>)',
          40: 'rgb(var(--colors-neutral-40) / <alpha-value>)',
          50: 'rgb(var(--colors-neutral-50) / <alpha-value>)',
          60: 'rgb(var(--colors-neutral-60) / <alpha-value>)',
          70: 'rgb(var(--colors-neutral-70) / <alpha-value>)',
          80: 'rgb(var(--colors-neutral-80) / <alpha-value>)',
          90: 'rgb(var(--colors-neutral-90) / <alpha-value>)',
          95: 'rgb(var(--colors-neutral-95) / <alpha-value>)',
          100: 'rgb(var(--colors-neutral-100) / <alpha-value>)',
          200: 'rgb(var(--colors-neutral-200) / <alpha-value>)',
          300: 'rgb(var(--colors-neutral-300) / <alpha-value>)',
          400: 'rgb(var(--colors-neutral-400) / <alpha-value>)',
          500: 'rgb(var(--colors-neutral-500) / <alpha-value>)',
          600: 'rgb(var(--colors-neutral-600) / <alpha-value>)',
          700: 'rgb(var(--colors-neutral-700) / <alpha-value>)',
          800: 'rgb(var(--colors-neutral-800) / <alpha-value>)',
          900: 'rgb(var(--colors-neutral-900) / <alpha-value>)',
        },
      },
      borderColor: {
        DEFAULT: 'rgb(var(--colors-neutral-20) / <alpha-value>)',
      },
      backgroundImage: {
        'chevron-down': 'url(/assets/images/icons/chevron-down.svg)',
      },
      backgroundPosition: {
        'left-2': 'left .5rem center',
        'left-4': 'left 1rem center',
        'left-6': 'left 1.5rem center',
        'left-8': 'left 2rem center',
        'right-2': 'right .5rem center',
        'right-4': 'right 1rem center',
        'right-6': 'right 1.5rem center',
        'right-8': 'right 2rem center',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        alpha: 'lower-alpha',
      },
      boxShadow: {
        'default': '0px 6px 20px 0px rgba(0, 0, 0, 0.04);'
      },
      borderRadius: {
        large: '.625rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}
