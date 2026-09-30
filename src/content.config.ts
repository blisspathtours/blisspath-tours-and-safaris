import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    destinationSlug: z.string(),
    country: z.enum(['Kenya', 'Tanzania', 'Uganda']),
    publishDate: z.string(),
    author: z.string(),
    metaDescription: z.string(),
    heroImage: z.string(),
    keywords: z.array(z.string()),
    readingTime: z.string()
  })
});

export const collections = { blog };
