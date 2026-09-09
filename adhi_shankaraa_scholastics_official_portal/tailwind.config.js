/**
 * Design tokens transcribed from the Google Stitch export's inline `tailwind.config`.
 * Colours, spacing, radii and font families are kept verbatim.
 *
 * The large display / headline `fontSize` tokens have been made fluid with
 * `clamp()` so headings scale smoothly between 320px and desktop. Each clamp's
 * UPPER bound is identical to the original fixed pixel value, so the desktop
 * appearance is unchanged — only small screens are adapted.
 */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        primary: '#3b1259',
        'primary-container': '#4a154b',
        'on-primary': '#ffffff',
        'on-primary-container': '#ffd6f8',
        secondary: '#c89620',
        'secondary-container': '#fec64f',
        'secondary-fixed': '#ffdea3',
        surface: '#fbf8f5',
        'surface-bright': '#ffffff',
        'surface-dim': '#f0e9e1',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f7f2eb',
        'surface-container': '#f2ece3',
        'surface-container-high': '#ece3d8',
        'surface-container-highest': '#e4dacf',
        'on-surface': '#241b2b',
        'on-surface-variant': '#53485c',
        outline: '#84778e',
        'outline-variant': '#d4c8db',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        'layout-max-width': '80rem',
        'space-lg': '1.5rem',
        'space-xs': '0.5rem',
        'layout-margin-mobile': '1.25rem',
        'gutter-desktop': '2rem',
        'space-2xl': '3rem',
        'space-sm': '0.75rem',
        'space-4xl': '6rem',
        'gutter-mobile': '1rem',
        'space-md': '1rem',
        'space-3xs': '0.125rem',
        'layout-margin-tablet': '2.5rem',
        'space-2xs': '0.25rem',
        'layout-margin-desktop': '5rem',
        'space-xl': '2rem',
        'space-3xl': '4rem',
      },
      fontFamily: {
        'headline-lg': ['Playfair Display', 'serif'],
        'headline-md': ['Playfair Display', 'serif'],
        'headline-sm': ['Playfair Display', 'serif'],
        'display-lg': ['Playfair Display', 'serif'],
        'display-md': ['Playfair Display', 'serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif'],
        'label-lg': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'label-caps': ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Fluid type. LOWER bound = phone size (~375px), UPPER bound = original
        // desktop pixel value (unchanged), so large screens look identical and
        // only small screens are dialled down.
        'display-lg': [
          'clamp(1.625rem, 0.9rem + 3.1vw, 52px)',
          { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-md': [
          'clamp(1.375rem, 0.92rem + 1.94vw, 38px)',
          { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'headline-lg': [
          'clamp(1.25rem, 0.91rem + 1.45vw, 32px)',
          { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'headline-md': [
          'clamp(1.125rem, 0.955rem + 0.73vw, 24px)',
          { lineHeight: '1.35', letterSpacing: '0em', fontWeight: '600' },
        ],
        'headline-sm': [
          'clamp(1.0625rem, 0.98rem + 0.36vw, 20px)',
          { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' },
        ],
        'body-lg': [
          'clamp(0.9375rem, 0.88rem + 0.24vw, 17px)',
          { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' },
        ],
        'body-md': ['15px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.04em', fontWeight: '600' }],
        'label-md': ['13px', { lineHeight: '18px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '15px', letterSpacing: '0.06em', fontWeight: '500' }],
        'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.12em', fontWeight: '700' }],
      },
    },
  },
  plugins: [forms, containerQueries],
};
