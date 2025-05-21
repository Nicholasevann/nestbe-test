import { z } from 'zod';

export const CreateProPertySchema = z
  .object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().min(1),
    image: z.string().min(1),
  })
  .required();

export type CreatePropertyDto = z.infer<typeof CreateProPertySchema>;
