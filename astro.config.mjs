// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site:
    `https://${process.env.VERCEL_URL}` ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` ||
    `https://${process.env.VERCEL_BRANCH_URL}` ||
    'http://localhost:4321',
  integrations: [react()],
  adapter: vercel(),
});
