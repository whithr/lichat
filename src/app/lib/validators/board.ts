import { z } from 'zod';

export const BoardValidator = z.object({
  name: z.string().min(3).max(21),
});

export const BoardSubscriptionValidator = z.object({
  board_id: z.string(),
});

export type CreateLiBoardPayload = z.infer<typeof BoardValidator>;
export type BoardSubscriptionValidator = z.infer<
  typeof BoardSubscriptionValidator
>;
