import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

/* <head>
<link href="https://fonts.googleapis.com/css2?family=FiraGO:wght@300;400;700&display=swap" rel="stylesheet"></link>
</head> */

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://softfan.net',
  integrations: [tailwind(), sitemap(), mdx(), react()]
});