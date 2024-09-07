import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		preview: z.string(),
		readingTime: z.string(),

		pubDate: z.coerce.date(),
		bannerImage: z.string().optional(),
	}),
});

export const collections = { blog };

