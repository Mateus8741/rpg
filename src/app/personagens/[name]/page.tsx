'use client'

import { api } from '@/api/api'
import { Form } from '@/components/Form'
import { Personagem } from '@/models/rpgDTO'
import { useEffect, useState } from 'react'

interface TestProps {
  params: {
    name: string
  }
}

export default function Test({ params: { name } }: TestProps) {
  const [data, setData] = useState<Personagem[]>([]) // Change the type of 'data' to an array of 'Personagem' objects

  async function getPersona() {
    const perso = await api.get('')
    setData(perso.data)
  }

  const persona = data.find((persona) => persona.nome === name)

  console.log(data)

  console.log(persona)

  useEffect(() => {
    getPersona()
  }, [])

  return (
    <main className="min-h-screen grid grid-cols-1 gap-4 bg-gray-900 p-4">
      {persona ? (
        <div key={persona.nome} className="flex justify-center">
          <Form persona={persona} />
        </div>
      ) : (
        <div className="flex justify-center">
          <h1>Nome nao encontrado</h1>
        </div>
      )}
    </main>
  )
}
