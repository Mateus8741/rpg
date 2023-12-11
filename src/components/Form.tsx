import { Personagem } from '@/models/rpgDTO'
import { Atributes } from './Atributes'
import { Hability } from './Hability'
import { Header } from './Header'
import { Inventory } from './Inventory'

interface Persona {
  persona: Personagem
}

export function Form({ persona }: Persona) {
  return (
    <div
      key={persona.nome}
      className="max-w-max mx-auto w-full bg-gray-700 shadow-md rounded-lg overflow-hidden mb-8 md:max-w-2xl lg:max-w-4xl"
    >
      <Header persona={persona} />

      <div className="p-4">
        <Atributes persona={persona} />

        <Hability persona={persona} />

        <Inventory persona={persona} />
      </div>
    </div>
  )
}
