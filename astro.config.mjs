import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ybycode.github.io',
  integrations: [mdx(), sitemap()],
  redirects: {
    "/b": "/"
  }
})
