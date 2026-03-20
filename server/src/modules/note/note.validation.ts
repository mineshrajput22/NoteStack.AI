import { z } from 'zod';

const tagsSchema = z
	.array(z.string())
	.optional()
	.transform((tags) => {
		if (!tags) return [];

		const cleaned = tags
			.map((tag) => tag.trim().toLowerCase())
			.filter((tag) => tag.length > 0);

		return [...new Set(cleaned)];
	});

export const createNoteSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	content: z.string().min(1, 'Content is required'),
	tags: tagsSchema,
});

export const updateNoteSchema = z.object({
	title: z.string().min(1).optional(),
	content: z.string().min(1).optional(),
	tags: tagsSchema,
	isPinned: z.boolean().optional(),
});
