import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  plugins: [
    typography(),
  ],
  content: [
    'content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
    },
  },
}
