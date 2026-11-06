import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.string() }); // url starting with "TODO" renders as a visible placeholder

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one line, shown on the home page
    year: z.string(),
    venue: z.string().optional(), // short label for the home-page list
    context: z.string(),
    role: z.string(),
    status: z.string().optional(),
    featured: z.boolean().default(false), // shown under "Selected work" on the home page
    order: z.number().default(99),
    draft: z.boolean().default(false),
    links: z.array(link).default([]),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    venue: z.string(),
    role: z.string().optional(), // e.g. "co-author / editor"
    personal: z.boolean().default(false), // personal blog, listed separately from aistack work
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
