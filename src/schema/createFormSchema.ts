import { z } from 'zod'

export const createFormSchema = z.object({
  userName: z.string().min(3).max(20),
  level: z.number().min(1).max(100),
  exp: z.number().min(0).max(1000000),
  gold: z.number().min(0).max(1000000),

  attributes: z.object({
    hp: z.number().min(0).max(1000000),
    mp: z.number().min(0).max(1000000),
    str: z.number().min(0).max(1000000),
    agl: z.number().min(0).max(1000000),
    dex: z.number().min(0).max(1000000),
    con: z.number().min(0).max(1000000),
    int: z.number().min(0).max(1000000),
  }),

  abilities: z.array(
    z.object({
      ability: z.string(),
      wear: z.string(),
      cost: z.string(),
    }),
  ),

  inventory: z.array(
    z.object({
      itemName: z.string(),
      quantity: z.number().min(0).max(1000000),
    }),
  ),
})

export type CreateFormSchema = z.infer<typeof createFormSchema>
