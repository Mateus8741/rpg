import data from '../../../server/db.json'

export async function GET() {
  return Response.json(data)
}
