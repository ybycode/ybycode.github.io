import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// z is zod, see
// https://docs.astro.build/en/guides/content-collections/#defining-datatypes-with-zod
// and https://zod.dev/

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.coerce.boolean(),
  }),
});

export const collections = { blog };
