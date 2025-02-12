import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const plugin = require('tailwindcss/plugin')

const minWidth = 375
const maxWidth = 1440
const baseFontSize = 16

const properties = [
  'font-size',
  'line-height',
  'letter-spacing',
  'word-spacing',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-inline',
  'gap',
  'row-gap',
  'column-gap',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'border-width',
  'border-radius',
  'box-shadow',
  'outline-width',
  'outline-offset',
  'flex-basis',
  'flex-grow',
  'flex-shrink',
  'grid-auto-columns',
  'grid-auto-rows',
  'grid-template-columns',
  'grid-template-rows',
  'top',
  'right',
  'bottom',
  'left',
  'inset',
]

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: '15px',
      center: true,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))',
      },
    },
    extend: {
      opacity: {
        '3': '0.03',
      },
      screens: {
        sm: '375px',
        xl: '1440px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ matchUtilities }: PluginAPI) {
      matchUtilities(
        Object.fromEntries(
          properties.map(prop => [
            `adaptive-${prop}`,
            (value: string) => {
              const [minSize, maxSize] = value.split(',').map(size => +size / baseFontSize)
              if (isNaN(minSize) || isNaN(maxSize)) return null

              const minWidthRem = minWidth / baseFontSize
              const maxWidthRem = maxWidth / baseFontSize

              const slope = (maxSize - minSize) / (maxWidthRem - minWidthRem)
              const yIntercept = minSize - slope * minWidthRem

              return {
                [prop]: `clamp(${minSize}rem, calc(${slope * 100}vw + ${yIntercept}rem), ${maxSize}rem)`,
              }
            },
          ]),
        ),
        {
          values: {
            '80-120': '80,120',
            '50-80': '50,80',
            '40-69': '40,69',
            '20-60': '20,60',
            '48-54': '48,54',
            '30-50': '30,50',
            '30-40': '30,40',
            '25-40': '25,40',
            '20-40': '20,40',
            '25-30': '25,30',
            '20-30': '20,30',
            '20-25': '20,25',
            '20-24': '20,24',
            '10-24': '10,24',
            '5-24': '5,24',
            '15-20': '15,20',
            '16-18': '16,18',
            '10-15': '10,15',
          },
        },
      )
    }),
  ],
} satisfies Config
