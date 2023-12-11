import { Personagem } from '@/models/rpgDTO'

interface InventoryProps {
  persona: Personagem
}

export function Inventory({ persona }: InventoryProps) {
  return (
    <div className="my-7">
      <h3 className="text-lg font-semibold mb-2 text-center">Inventário</h3>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-lg  font-semibold text-center">Nome do Item</th>
            <th className="text-lg  font-semibold text-center">Quantidade</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="text-left text-sm font-medium text-gray-900">
            <td className="py-2">Cabeça</td>
            <td className="py-2">{persona.equipamentos.cabeca || 'Vazio'}</td>
          </tr>

          <tr className="text-left text-sm font-medium text-gray-900">
            <td className="py-2">Peito</td>
            <td className="py-2">{persona.equipamentos.peito || 'Vazio'}</td>
          </tr>

          <tr className="text-left text-sm font-medium text-gray-900">
            <td className="py-2">Luvas</td>
            <td className="py-2">{persona.equipamentos.luvas || 'Vazio'}</td>
          </tr>

          <tr className="text-left text-sm font-medium text-gray-900">
            <td className="py-2">Botas</td>
            <td className="py-2">{persona.equipamentos.botas || 'Vazio'}</td>
          </tr>

          <tr className="text-left text-sm font-medium text-gray-900">
            <td className="py-2">Slot 5</td>
            <td className="py-2">1</td>
          </tr>

          <tr className="text-left text-sm font-medium text-gray-900">
            <td className="py-2">Slot 6</td>
            <td className="py-2">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
