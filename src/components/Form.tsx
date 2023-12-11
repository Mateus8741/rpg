import { Personagem } from '@/models/rpgDTO'
import { Atributes } from './Atributes'
import { Hability } from './Hability'
import { Header } from './Header'

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
        <div>
          <h3 className="text-lg font-semibold mb-2">Equipamentos</h3>
          <p>
            <span className="font-semibold">Cabeça:</span>{' '}
            {persona.equipamentos.cabeca || 'Vazio'}
          </p>
          <p>
            <span className="font-semibold">Peito:</span>{' '}
            {persona.equipamentos.peito || 'Vazio'}
          </p>
          {/* Adicionar outros equipamentos aqui */}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Inventário</h3>
          {persona.inventario.map((item, index) => (
            <p key={index}>
              <span className="font-semibold">{item.nomeItem}</span> -
              <span className="ml-2">Quantidade: {item.quantidade}</span>
            </p>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Ataque e Defesa</h3>
          <p>
            <span className="font-semibold">Ataque Máx:</span>{' '}
            {persona.ataqueMaximo}
          </p>
          <p>
            <span className="font-semibold">Defesa Máx:</span>{' '}
            {persona.defesaMaxima}
          </p>
        </div>
        He
      </div>
    </div>
  )
}
