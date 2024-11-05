import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://delightful-gecko-4478a2.netlify.app/blog/",
  integrations: [preact()]
});