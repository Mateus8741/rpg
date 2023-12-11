import { Form } from '@/components/Form'
import { PersonaFixas } from '@/mock/personas'

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-gray-900 p-4">
      {PersonaFixas.map((persona) => {
        return (
          <div key={persona.nome} className="flex justify-center">
            <Form persona={persona} />
          </div>
        )
      })}
    </main>
  )
}
