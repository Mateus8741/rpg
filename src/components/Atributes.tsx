import { Personagem } from '@/models/rpgDTO'
import Image from 'next/image'

interface AtributesProps {
  persona: Personagem
}

export function Atributes({ persona }: AtributesProps) {
  return (
    <div className="flex flex-col mb-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <table className="min-w-full">
          {/* <h1 className="text-lg font-semibold">Atributos</h1> */}
          <thead>
            <tr>
              <th colSpan={2} className="text-lg font-semibold text-center">
                Atributos
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">HP:</td>
              <td className="">{persona.atributos.hp}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">MP:</td>
              <td className="">{persona.atributos.mp}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">FOR:</td>
              <td className="">{persona.atributos.forca}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">AGL:</td>
              <td className="">{persona.atributos.agilidade}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">DES:</td>
              <td className="">{persona.atributos.destreza}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">CON:</td>
              <td className="">{persona.atributos.constituicao}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">INT:</td>
              <td className="">{persona.atributos.inteligencia}</td>
            </tr>
          </tbody>
        </table>

        <table className="min-w-full">
          {/* <h1 className="text-lg font-semibold">Atributos</h1> */}
          <thead>
            <tr>
              <th colSpan={2} className="text-lg font-semibold text-center">
                Atributos
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">HP:</td>
              <td className="">{persona.atributos.hp}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">MP:</td>
              <td className="">{persona.atributos.mp}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">FOR:</td>
              <td className="">{persona.atributos.forca}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">AGL:</td>
              <td className="">{persona.atributos.agilidade}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">DES:</td>
              <td className="">{persona.atributos.destreza}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">CON:</td>
              <td className="">{persona.atributos.constituicao}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">INT:</td>
              <td className="">{persona.atributos.inteligencia}</td>
            </tr>
          </tbody>
        </table>

        <table className="min-w-full">
          <thead>
            <tr>
              <th colSpan={2} className="text-lg font-semibold text-center">
                Equipamento
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">1:</td>
              <td className="">{persona.equipamentos.cabeca}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">2:</td>
              <td className="">{persona.equipamentos.peito}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">3:</td>
              <td className="">{persona.equipamentos.luvas}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">4:</td>
              <td className="">{persona.equipamentos.botas}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="py-2">5:</td>
              <td className="py-2">arma esquerda</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="py-2">6:</td>
              <td className="py-2">arma direita</td>
            </tr>
            {/* Adicionar outros atributos aqui */}
          </tbody>
        </table>

        <table className="min-w-full">
          <thead>
            <tr>
              <th colSpan={2} className="text-lg font-semibold text-center">
                Fobias
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {persona.fobias.map((fobia, index) => (
              <tr
                key={index}
                className="text-left text-sm font-medium text-gray-900"
              >
                <td className="">{fobia.monstro}:</td>
                <td className="">{fobia.quantidadeParaSuperar}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <Image
            src="/images/placeholder.png"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
