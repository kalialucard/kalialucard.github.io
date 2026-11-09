import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';
import { remarkEscapeRawHtml } from './scripts/remark-escape-html.mjs';

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
    // Convert raw HTML nodes to text before rehype-raw sees them.
    // This prevents hast-util-raw from crashing on nmap output / pipe chars
    // in migrated content that contains literal < > outside code fences.
    remarkPlugins: [remarkEscapeRawHtml],
    // Disable raw HTML processing — treat < > in prose as literal text
    rehypePlugins: [],
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
