import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
// @ts-ignore
import astroI18next from "astro-i18next";
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [
    react(),
    icon(
      {
        include: {
          ri: ['*'],
        }
      }
    ),
    astroI18next(),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en"
  }
});