import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'

import '../src/app/[locale]/globals.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1B1C1D' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'light',
      dark: { ...themes.dark, appBg: '#1B1C1D' },
      light: { ...themes.normal, appBg: '#FFFFFF' },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === '#1B1C1D'
      document.documentElement.classList.toggle('dark', isDark)
      return <Story />
    },
  ],
}

export default preview
