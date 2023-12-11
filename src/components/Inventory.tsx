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

        {persona.inventario.map((item, index) => (
          <tbody key={index} className="bg-white divide-y divide-gray-200">
            <tr className="text-center text-sm font-medium text-gray-900">
              <td className="py-2">{item.nomeItem}</td>
              <td className="py-2">{item.quantidade}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
