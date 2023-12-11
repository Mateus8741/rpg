import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white text-black gap-5">
      <h2>Nome nao encontrado</h2>
      <p>Por favor tente novamente</p>
      <Link
        href="/"
        className="bg-black border-2 border-black text-white px-4 py-2 rounded-md"
      >
        Retorne a Home
      </Link>
    </main>
  )
}
