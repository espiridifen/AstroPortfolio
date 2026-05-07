// content.config.ts
import { ObsidianMdLoader } from "astro-loader-obsidian";
import { defineCollection, z } from "astro:content";

export const collections = {
  blogposts: defineCollection({
    loader: ObsidianMdLoader({
      base: "src/content/vault/Astro Portfolio",
      pattern: "Blog/**/*.md",
      url: "blog",
    }),
  }),
  projects: defineCollection({
    loader: ObsidianMdLoader({
      base: "src/content/vault/Astro Portfolio",
      pattern: "Projects/**/*.md",
      url: "projects",
    }),
  }),
};