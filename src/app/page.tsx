'use client'

import { PersonaFixas } from '@/mock/personas'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState('')

  const persona = PersonaFixas.find((persona) => persona.nome === username)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (persona?.nome === undefined) {
      router.push('/not-found')
    } else {
      router.push(`/personagens/${persona.nome}`)
    }
  }

  return (
    <main className="min-h-screen text-black bg-white">
      <form
        className="flex flex-col items-center justify-center h-screen"
        onSubmit={handleSubmit}
      >
        <h1 className="text-6xl font-bold mb-12">Sign In</h1>
        <div className="w-1/3">
          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="username"
          >
            Nome do personagem
          </label>
          <input
            className="w-full p-2 mb-6 text-lg bg-gray-100 border border-gray-400 rounded"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            className="flex items-center justify-center w-full p-4 mb-6 text-lg text-white bg-gray-900 rounded"
            type="submit"
          >
            LogIn
          </button>
        </div>
      </form>
    </main>
  )
}
