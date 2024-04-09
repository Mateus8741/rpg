import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request, ctx: any) {
  const { params } = ctx

  const hero = await prisma.hero.findUnique({
    where: {
      id: params.id,
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

  if (!hero) {
    return NextResponse.json('Hero not found', { status: 404 })
  }

  return NextResponse.json(hero, { status: 200 })
}

export async function PUT(request: Request, ctx: any) {
  const { params } = ctx

  // const heroIndex = data.heroes.findIndex((hero) => hero.id === params.id)

  // if (heroIndex === -1) {
  //   return NextResponse.json('Hero not found', { status: 404 })
  // }

  // const updatedHero = await request.json()

  // data.heroes[heroIndex] = { ...data.heroes[heroIndex], ...updatedHero }

  // return NextResponse.json(data.heroes[heroIndex], { status: 200 })
}
