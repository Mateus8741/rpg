import { z } from 'zod'

export const createFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(3).max(20),
  level: z.string().min(1).max(100),
  exp: z.string().min(0).max(1000000),
  gold: z.string().min(0).max(1000000),
  maxAtk: z.string().min(0).max(1000000),
  maxDef: z.string().min(0).max(1000000),

  cabeca: z.string(),
  peito: z.string(),
  luvas: z.string(),
  botas: z.string(),
  armaEsquerda: z.string(),
  armaDireita: z.string(),

  hp: z.string().min(0).max(1000000),
  mp: z.string().min(0).max(1000000),
  forca: z.string().min(0).max(1000000),
  agilidade: z.string().min(0).max(1000000),
  destreza: z.string().min(0).max(1000000),
  constituicao: z.string().min(0).max(1000000),
  inteligencia: z.string().min(0).max(1000000),

  fobias: z.array(
    z.object({
      monstro: z.string(),
      quantidade: z.string().min(0).max(1000000),
    }),
  ),

  habilidade: z.array(
    z.object({
      nome: z.string(),
      desgaste: z.string().min(0).max(1000000),
      custoMP: z.string().min(0).max(1000000),
    }),
  ),

  inventario: z.array(
    z.object({
      nome: z.string(),
      quantidade: z.string().min(0).max(1000000),
    }),
  ),
})

export type CreateFormSchema = z.infer<typeof createFormSchema>
