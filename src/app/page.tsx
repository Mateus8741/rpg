'use client'

import { api } from '@/api/api'
import PrimeButton from '@/components/PrimeButton'
import { Personagem } from '@/models/rpgDTO'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [data, setData] = useState<Personagem[]>([])

  async function getPersona() {
    const perso = await api.get('')
    setData(perso.data)
  }

  function Test() {
    fetch('http://localhost:3000/api/heroes')
      .then((response) => {
        response.json().then((data) => {
          console.log(data)
        })
      })
      .catch((error) => {
        console.log('Erro ao buscar dados', error)
      })
  }

  const persona = data.find(
    (persona) =>
      persona.nome.toLocaleLowerCase() === username.toLocaleLowerCase(),
  )

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (persona?.nome === undefined) {
      router.push('/not-found')
    } else {
      router.push(`/personagens/${persona.nome}`)
    }
  }

  useEffect(() => {
    getPersona()
    Test()
  }, [])

  return (
    <main className="min-h-screen text-black bg-white dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col h-screen items-center justify-center">
        <form
          className="flex w-full items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-1/3">
            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="username"
            >
              Nome do personagem
            </label>
            <input
              className="w-full p-2 mb-6 text-lg bg-gray-100 border border-gray-400 text-black rounded"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <PrimeButton text="Ver sua ficha" submit />
          </div>
        </form>

        <div className="w-1/3">
          <PrimeButton
            text="Criar ficha"
            onClick={() => router.push('/createForm')}
          />
        </div>

        <div className="w-1/3">
          <PrimeButton
            text="Ver todas as fichas"
            onClick={() => router.push('/personagens')}
          />
        </div>
      </div>
    </main>
  )
}
