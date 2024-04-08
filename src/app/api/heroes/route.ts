// import data from '@/server/db.json'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const heroes = await prisma.hero.findMany()

  return Response.json(heroes)
}

export async function POST(request: Request) {
  const newHero = await request.json()

  const createdHero = await prisma.hero.create({ data: newHero })

  if (!createdHero) {
    return Response.json('Error creating hero', { status: 500 })
  }

  return Response.json(createdHero, { status: 201 })

  // const newHero = await request.json()

  // data.heroes.push(newHero)

  // return Response.json(newHero, { status: 201 })
}
