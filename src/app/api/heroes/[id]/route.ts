// import data from '../../../server/db.json'

// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   const hero = data.heroes.findIndex((hero) => hero.id === params.id)

//   const body = await request.json()

//   if (hero === -1) {
//     return new Response('Hero not found', { status: 404 })
//   }

//   data.heroes[hero] = body

//   return Response.json(data)
// }

// import fs from 'fs/promises'

// const filePath = '../../../server/db.json'

// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const jsonData = await fs.readFile(filePath, 'utf8')
//     const data = JSON.parse(jsonData)

//     const heroIndex = data.heroes.findIndex(
//       (hero: { id: string }) => hero.id === params.id,
//     )

//     if (heroIndex === -1) {
//       return new Response('Hero not found', { status: 404 })
//     }

//     const updatedHero = await request.json()

//     data.heroes[heroIndex] = { ...data.heroes[heroIndex], ...updatedHero }

//     await fs.writeFile(filePath, JSON.stringify(data, null, 2))

//     return new Response(JSON.stringify(data.heroes[heroIndex]), { status: 200 })
//   } catch (error) {
//     return new Response('Error updating hero', { status: 500 })
//   }
// }

import data from '@/server/db.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request, ctx: any) {
  const { params } = ctx

  const hero = data.heroes.find((hero) => hero.id === params.id)

  return NextResponse.json({
    hero,
  })
}

export async function PUT(request: Request, ctx: any) {
  const { params } = ctx

  const heroIndex = data.heroes.findIndex((hero) => hero.id === params.id)

  if (heroIndex === -1) {
    return NextResponse.json('Hero not found', { status: 404 })
  }

  const updatedHero = await request.json()

  data.heroes[heroIndex] = { ...data.heroes[heroIndex], ...updatedHero }

  return NextResponse.json(data.heroes[heroIndex], { status: 200 })
}
