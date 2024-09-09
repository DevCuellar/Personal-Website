import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		preview: z.string(),
		readingTime: z.string(),

		pubDate: z.coerce.date(),
		tag: z.string(),
	}),
});

export const collections = { blog };

