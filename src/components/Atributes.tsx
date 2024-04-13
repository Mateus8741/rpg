import { Personagem } from '@/models/rpgDTO'
import Image from 'next/image'
import armor from '../images/schemaArmor.png'

interface AtributesProps {
  persona: Personagem
}

export function Atributes({ persona }: AtributesProps) {
  console.log(persona)

  return (
    <div className="flex flex-col mb-4">
      <div className="grid grid-cols-1 mb-4">
        <table className="w-1/2">
          <thead>
            <tr>
              <th colSpan={2} className="text-lg font-semibold text-center">
                Ataque e Defesa
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-center">
              <td colSpan={2} className="py-4" align="center">
                <Image src={armor} width={120} height={120} alt="Armor" />
              </td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">Ataque Máx:</td>
              <td className="">{persona?.maxAtk}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">Defesa Máx:</td>
              <td className="">{persona?.maxDef}</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full">
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
              <td className="">{persona?.hp}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">MP:</td>
              <td className="">{persona?.mp}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">FOR:</td>
              <td className="">{persona?.forca}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">AGL:</td>
              <td className="">{persona?.agilidade}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">DES:</td>
              <td className="">{persona?.destreza}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">CON:</td>
              <td className="">{persona?.constituicao}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">INT:</td>
              <td className="">{persona?.inteligencia}</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full">
          <thead>
            <tr>
              <th colSpan={2} className="text-lg font-semibold text-center">
                Equipamento
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">1 Cabeça:</td>
              <td className="">{persona?.cabeca}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">2 Peito:</td>
              <td className="">{persona?.peito}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">3 Luvas:</td>
              <td className="">{persona?.luvas}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="">4 Botas:</td>
              <td className="">{persona?.botas}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="py-2">5 Arma Esq.:</td>
              <td className="py-2">{persona?.armaEsquerda}</td>
            </tr>

            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="py-2">6 Arma Dir.:</td>
              <td className="py-2">{persona?.armaDireita}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-lg font-semibold text-center">
              Fobias
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {persona?.fobias?.length > 0 ? (
            persona.fobias.map((fobia, index) => (
              <tr
                key={index}
                className="text-left text-sm font-medium w-full text-gray-900"
              >
                <td className="">{fobia.monstro}:</td>
                <td className="">{fobia.quantidade}</td>
              </tr>
            ))
          ) : (
            <tr className="text-left text-sm font-medium text-gray-900">
              <td className="" align="center">
                Nenhuma
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
