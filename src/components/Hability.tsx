import { Personagem } from '@/models/rpgDTO'

interface HabilityProps {
  persona: Personagem
}

export function Hability({ persona }: HabilityProps) {
  return (
    <div className="mb-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-lg  font-semibold text-center">Habilidade</th>
            <th className="text-lg  font-semibold text-center">Desgaste</th>
            <th className="text-lg  font-semibold text-center">Custo</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {persona?.habilidade?.map((habilidade, index) => (
            <tr
              key={index}
              className="text-center text-sm font-medium text-gray-900"
            >
              <td className="py-2">{habilidade.nome}</td>
              <td className="py-2">{habilidade.desgaste}</td>
              <td className="py-2">{habilidade.custoMP} MP</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
