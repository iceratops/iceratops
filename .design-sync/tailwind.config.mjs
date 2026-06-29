// Tailwind config for the design-sync stylesheet. Reuses the repo's theme
// (brand colors, fonts, animations) and scans component + content + authored
// preview sources so every utility the cards render is present in the output.
import base from '../tailwind.config.js'

export default {
  ...base,
  content: [
    'app/**/*.{js,ts,jsx,tsx,mdx}',
    'components/**/*.{js,ts,jsx,tsx,mdx}',
    'content/**/*.{js,ts,jsx,tsx,mdx}',
    '.design-sync/previews/**/*.{tsx,jsx}',
  ],
}
