// import data from '@/server/db.json'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const heroes = await prisma.hero.findMany({
    include: {
      atributos: true,
      fobias: true,
      Status: true,
      habilidade: true,
      inventario: true,
      equipamentos: true,
    },
  })

  return Response.json(heroes)
}

export async function POST(request: Request) {
  const newHero = await request.json()

  console.log(newHero)

  const createdHero = await prisma.hero.create({
    data: {
      nome: newHero.nome,
      level: newHero.level,
      exp: newHero.exp,
      gold: newHero.gold,
      atributos: {
        create: {
          hp: newHero.atributos.hp,
          mp: newHero.atributos.mp,
          forca: newHero.atributos.forca.toString(),
          agilidade: newHero.atributos.agilidade.toString(),
          destreza: newHero.atributos.destreza.toString(),
          constituicao: newHero.atributos.constituicao.toString(),
          inteligencia: newHero.atributos.inteligencia.toString(),
        },
      },
      fobias: {
        create: newHero.fobias.map((fobia: any) => ({
          monstro: fobia.monstro,
          quantidade: fobia.quantidade,
        })),
      },
      Status: {
        create: {
          maxAtk: newHero.status.maxAtk,
          maxDef: newHero.status.maxDef,
        },
      },
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
      equipamentos: {
        create: {
          cabeca: newHero.equipamentos.cabeca,
          peito: newHero.equipamentos.peito,
          luvas: newHero.equipamentos.luvas,
          botas: newHero.equipamentos.botas,
          armaEsquerda: newHero.equipamentos.armaEsquerda,
          armaDireita: newHero.equipamentos.armaDireita,
        },
      },
    },
    include: {
      atributos: true,
      fobias: true,
      Status: true,
      habilidade: true,
      inventario: true,
      equipamentos: true,
    },
  })

  return Response.json(createdHero, { status: 201 })
}
