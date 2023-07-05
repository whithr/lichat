import { z } from 'zod';

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be longer than 3 characters' })
    .max(128, { message: 'Title must be under 128 characters' }),
  boardId: z.number(),
  content: z.any(),
});

export type PostCreationPayload = z.infer<typeof PostValidator>;
