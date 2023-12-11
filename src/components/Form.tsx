import { Personagem } from '@/models/rpgDTO'
import { Header } from './Header'

interface Persona {
  persona: Personagem
}

export function Form({ persona }: Persona) {
  return (
    <div
      key={persona.nome}
      className="max-w-max mx-auto bg-gray-700 shadow-md rounded-lg overflow-hidden mb-8"
    >
      <Header persona={persona} />

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Informações Gerais</h3>
            <p>
              <span className="font-semibold">Raça:</span> {persona.raca}
            </p>
            <p>
              <span className="font-semibold">Experiência:</span>{' '}
              {persona.experiencia}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Atributos</h3>
            <p>
              <span className="font-semibold">HP:</span> {persona.atributos.hp}
            </p>
            <p>
              <span className="font-semibold">MP:</span> {persona.atributos.mp}
            </p>
            {/* Adicionar outros atributos aqui */}
          </div>
        </div>
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
          <h3 className="text-lg font-semibold mb-2">Fobias</h3>
          {persona.fobias.map((fobia, index) => (
            <p key={index}>
              <span className="font-semibold">Monstro:</span> {fobia.monstro},
              <span className="ml-2 font-semibold">Superar:</span>{' '}
              {fobia.quantidadeParaSuperar}
            </p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Habilidades</h3>
          {persona.habilidades.map((habilidade, index) => (
            <p key={index}>
              <span className="font-semibold">{habilidade.nome}</span> -
              <span className="ml-2">
                Desgaste: {habilidade.desgaste}, MP: {habilidade.custoMP}
              </span>
            </p>
          ))}
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
