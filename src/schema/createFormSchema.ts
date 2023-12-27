import { z } from 'zod'

export const createFormSchema = z.object({
  userName: z.string().min(3).max(20),
  level: z.string().min(1).max(100),
  exp: z.string().min(0).max(1000000),
  gold: z.string().min(0).max(1000000),

  attributes: z.object({
    hp: z.string().min(0).max(1000000),
    mp: z.string().min(0).max(1000000),
    str: z.string().min(0).max(1000000),
    agl: z.string().min(0).max(1000000),
    dex: z.string().min(0).max(1000000),
    con: z.string().min(0).max(1000000),
    int: z.string().min(0).max(1000000),
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
      quantity: z.string().min(0).max(1000000),
    }),
  ),
})

export type CreateFormSchema = z.infer<typeof createFormSchema>
