import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://samindrasamiya.site',
  output: 'static',
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'one-dark-pro',
        wrap: false,
      },
    }),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    pagefind(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
    // Disable raw HTML processing — the migrated content contains HTML tags
    // that crash hast-util-raw. We render them as escaped text instead.
    rehypePlugins: [],
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
