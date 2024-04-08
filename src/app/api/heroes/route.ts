import data from '@/server/db.json'

export async function GET() {
  return Response.json(data.heroes)
}

export async function POST(request: Request) {
  const newHero = await request.json()

  data.heroes.push(newHero)

  return Response.json(newHero, { status: 201 })
}
