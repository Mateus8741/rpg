'use client'

import { api } from '@/api/api'
import { Form } from '@/components/Form'
import { Personagem } from '@/models/rpgDTO'
import { useEffect, useState } from 'react'

export default function AllForms() {
  const [data, setData] = useState<Personagem[]>([]) // Change the type of 'data' to an array of 'Personagem' objects

  async function getPersona() {
    const perso = await api.get('')
    setData(perso.data)
  }

  useEffect(() => {
    getPersona()
  }, [])

  return (
    <main className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-gray-900 p-4">
      {data.map((persona) => {
        return (
          <div key={persona.nome} className="flex justify-center">
            <Form persona={persona} />
          </div>
        )
      })}
    </main>
  )
}
