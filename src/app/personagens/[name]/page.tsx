'use client'

import { Form } from '@/components/Form'
import { PersonaFixas } from '@/mock/personas'

interface TestProps {
  params: {
    name: string
  }
}

export default function Test({ params: { name } }: TestProps) {
  const persona = PersonaFixas.find((persona) => persona.nome === name)

  console.log(persona?.nome)

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
