import { Personagem } from '@/models/rpgDTO'

interface Persona {
  persona: Personagem
}

export function Header({ persona }: Persona) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 bg-gray-600 text-white text-center py-4 px-4">
      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <h2 className="text-2xl font-bold">Nome</h2>
        <h2 className="text-2xl font-normal border-2 border-white px-2">
          {persona.nome}
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <p className="text-2xl font-bold">Level</p>
        <p className="text-2xl font-normal border-2 border-white px-2">
          {persona.level}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <p className="text-2xl font-bold">Experiência</p>
        <p className="text-2xl font-normal border-2 border-white px-2">
          {persona.experiencia}
        </p>
      </div>
    </div>
  )
}
