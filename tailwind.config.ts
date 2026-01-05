import type { Config } from 'tailwindcss'
import { getTheme } from './config/theme.config'

const theme = getTheme()

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: theme.colors.primary,
          light: theme.colors.secondary,
        },
        secondary: {
          DEFAULT: theme.colors.secondary,
        },
        accent: {
          DEFAULT: theme.colors.accent,
        },
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        info: theme.colors.info,
        background: theme.colors.background,
        surface: theme.colors.surface,
        text: {
          primary: theme.colors.text.primary,
          secondary: theme.colors.text.secondary,
          disabled: theme.colors.text.disabled,
        },
      },
      fontFamily: {
        heading: [theme.fonts.heading],
        body: [theme.fonts.body],
      },
      borderRadius: {
        sm: theme.borderRadius.small,
        md: theme.borderRadius.medium,
        lg: theme.borderRadius.large,
      },
      spacing: {
        unit: `${theme.spacing.unit}px`,
      },
    },
  },
  plugins: [],
}

export default config

