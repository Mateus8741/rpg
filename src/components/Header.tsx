import { Personagem } from '@/models/rpgDTO'
import { useAppForm } from '@/services/useAppForm'
import { useRouter } from 'next/navigation'
import { FaPenToSquare } from 'react-icons/fa6'

interface Persona {
  persona: Personagem
}

export function Header({ persona }: Persona) {
  const router = useRouter()

  const { setPersona } = useAppForm()

  function handleEdit() {
    console.log('edit')
    setPersona(persona)
    router.push('/editForm')
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center bg-gray-600 text-white text-center py-4 px-4">
      <div className="flex flex-1 flex-row gap-4">
        <div className="flex flex-row gap-1 items-center">
          <h2 className="text-xs sm:text-sm md:text-sm lg:text-md xl:text-xl font-bold">
            Nome
          </h2>
          <h2 className="text-xs sm:text-sm md:text-sm lg:text-md xl:text-xl font-normal border-2 border-white px-2">
            {persona.nome}
          </h2>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <p className="text-xs sm:text-sm md:text-xl lg:text-xl font-bold">
            Level
          </p>
          <p className="text-xs sm:text-sm md:text-sm lg:text-md xl:text-xl font-normal border-2 border-white px-2">
            {persona.level}
          </p>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <p className="text-xs sm:text-sm md:text-xl lg:text-xl font-bold">
            Experiência
          </p>
          <p className="text-xs sm:text-sm md:text-sm lg:text-md xl:text-xl font-normal border-2 border-white px-2">
            {persona.experiencia}
          </p>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <p className="text-xs sm:text-sm md:text-2xl lg:text-xl font-bold">
            Gold
          </p>
          <p className="text-xs sm:text-sm md:text-sm lg:text-md xl:text-xl font-normal border-2 border-white px-2">
            {persona.gold}
          </p>
        </div>
      </div>

      <FaPenToSquare className="text-2xl cursor-pointer" onClick={handleEdit} />
    </div>
  )
}
