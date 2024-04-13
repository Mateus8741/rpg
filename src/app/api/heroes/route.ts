// import data from '@/server/db.json'

import { Personagem } from '@/models/rpgDTO'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const heroes = await prisma.hero.findMany({
    include: {
      fobias: true,
      habilidade: true,
      inventario: true,
    },
  })

  return Response.json(heroes)
}

export async function POST(request: Request) {
  const newHero: Personagem = await request.json()

  console.log(newHero)

  const createdHero = await prisma.hero.create({
    data: {
      nome: newHero.nome,
      level: newHero.level,
      exp: newHero.exp,
      gold: newHero.gold,

      hp: newHero.hp,
      mp: newHero.mp,
      forca: newHero.forca.toString(),
      agilidade: newHero.agilidade.toString(),
      destreza: newHero.destreza.toString(),
      constituicao: newHero.constituicao.toString(),
      inteligencia: newHero.inteligencia.toString(),

      fobias: {
        create: newHero.fobias.map((fobia: any) => ({
          monstro: fobia.monstro,
          quantidade: fobia.quantidade,
        })),
      },

      maxAtk: newHero.maxAtk,
      maxDef: newHero.maxDef,

      habilidade: {
        create: newHero.habilidade.map((habilidade: any) => ({
          nome: habilidade.nome,
          desgaste: habilidade.desgaste,
          custoMP: habilidade.custoMP,
        })),
      },
      inventario: {
        create: newHero.inventario.map((inventario: any) => ({
          nome: inventario.nome,
          quantidade: inventario.quantidade,
        })),
      },

      cabeca: newHero.cabeca ?? '',
      peito: newHero.peito ?? '',
      luvas: newHero.luvas ?? '',
      botas: newHero.botas ?? '',
      armaEsquerda: newHero.armaEsquerda ?? '',
      armaDireita: newHero.armaDireita ?? '',
    },
    include: {
      fobias: true,
      habilidade: true,
      inventario: true,
    },
  })

  return Response.json(createdHero, { status: 201 })
}
