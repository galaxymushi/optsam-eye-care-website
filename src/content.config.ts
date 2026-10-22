import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('J.M. Samwel'),
    authorRole: z.string().default('Optometrist & Founder, Optsam Eye Care'),
  }),
});

export const collections = { blog };
