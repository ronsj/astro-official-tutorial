// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL || 'http://localhost:4321',
  integrations: [react()],
  adapter: vercel(),
});