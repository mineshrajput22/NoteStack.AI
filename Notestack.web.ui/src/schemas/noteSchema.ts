import * as z from 'zod';

export const noteSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	content: z.string().min(1, { message: 'Description is required' }),
	tags: z.array(z.string()).optional(),
});

export type noteFormData = z.infer<typeof noteSchema>;

export const noteEntitySchema = noteSchema.extend({
	_id: z.string(),
});

export type Note = z.infer<typeof noteEntitySchema>;
