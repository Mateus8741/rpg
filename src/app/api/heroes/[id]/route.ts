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
      fobias: true,
      habilidade: true,
      inventario: true,
    },
  })

  if (!hero) {
    return NextResponse.json('Hero not found', { status: 404 })
  }

  return NextResponse.json(hero, { status: 200 })
}

export async function PUT(request: Request, ctx: any) {
  const { params } = ctx

  const hero = await prisma.hero.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!hero) {
    return NextResponse.json('Hero not found', { status: 404 })
  }

  const updatedHero = await request.json()

  const updatedHeroData = {
    ...hero,
    ...updatedHero,
  }

  const updatedHeroResponse = await prisma.hero.update({
    where: {
      id: params.id,
    },
    data: updatedHeroData,
    include: {
      fobias: true,
      habilidade: true,
      inventario: true,
    },
  })

  return NextResponse.json(updatedHeroResponse, { status: 200 })
}

export async function DELETE(request: Request, ctx: any) {
  const { params } = ctx

  console.log(params.id)

  await prisma.hero.delete({
    where: {
      id: params.id,
    },
    include: {
      fobias: true,
      habilidade: true,
      inventario: true,
    },
  })

  return NextResponse.json('Hero deleted', { status: 200 })
}
