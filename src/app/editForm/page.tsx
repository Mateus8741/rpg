'use client'

import { api } from '@/api/api'
import { FormTextInput } from '@/components/Form/FormTextInput'
import PrimeButton from '@/components/PrimeButton'
import { useAppForm } from '@/hooks/useAppForm'
import { CreateFormSchema, createFormSchema } from '@/schema/createFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm } from 'react-hook-form'

import { FaCirclePlus, FaCircleXmark } from 'react-icons/fa6'

export default function EditForm() {
  const { persona } = useAppForm()
  const { push } = useRouter()

  console.log(persona)

  const { control, handleSubmit } = useForm<CreateFormSchema>({
    resolver: zodResolver(createFormSchema),

    defaultValues: {
      userName: '' || persona?.nome,
      level: '' || persona?.level.toString(),
      exp: '' || persona?.experiencia.toString(),
      gold: '' || persona?.gold.toString(),
      attributes: {
        hp: '' || persona?.atributos.hp.toString(),
        mp: '' || persona?.atributos.mp.toString(),
        str: '' || persona?.atributos.forca.toString(),
        agl: '' || persona?.atributos.agilidade.toString(),
        dex: '' || persona?.atributos.destreza.toString(),
        con: '' || persona?.atributos.constituicao.toString(),
        int: '' || persona?.atributos.inteligencia.toString(),
      },
      phobias: [
        {
          phobia: '' || persona?.fobias[0].monstro,
          amount: '' || persona?.fobias[0].quantidadeParaSuperar.toString(),
        },
      ],
      maxAtkDef: {
        maxAtk: '' || persona?.ataqueMaximo.toString(),
        maxDef: '' || persona?.defesaMaxima.toString(),
      },
      abilities: [
        {
          ability: '' || persona?.habilidades[0].nome,
          wear: '' || persona?.habilidades[0].desgaste.toString(),
          cost: '' || persona?.habilidades[0].custoMP.toString(),
        },
      ],
      inventory: [
        {
          itemName: '' || persona?.inventario[0].nomeItem,
          quantity: '' || persona?.inventario[0].quantidade.toString(),
        },
      ],
    },

    mode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'abilities',
  })

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: 'inventory',
  })

  const {
    fields: fields3,
    append: append3,
    remove: remove3,
  } = useFieldArray({
    control,
    name: 'phobias',
  })

  function handleSubmitForm(data: CreateFormSchema) {
    api.put(`/${persona?.id}`, {
      userName: data.userName,
      level: Number(data.level),
      exp: Number(data.exp),
      gold: Number(data.gold),
      attributes: {
        ...data.attributes,
        hp: Number(data.attributes.hp),
        mp: Number(data.attributes.mp),
        str: Number(data.attributes.str),
        agl: Number(data.attributes.agl),
        dex: Number(data.attributes.dex),
        con: Number(data.attributes.con),
        int: Number(data.attributes.int),
      },
      phobias: data.phobias.map((phobia) => ({
        ...phobia,
        amount: Number(phobia.amount),
      })),
      maxAtkDef: {
        maxAtk: Number(data.maxAtkDef.maxAtk),
        maxDef: Number(data.maxAtkDef.maxDef),
      },
      abilities: data.abilities.map((ability) => ({
        ...ability,
        wear: Number(ability.wear),
        cost: Number(ability.cost),
      })),
      inventory: data.inventory.map((item) => ({
        ...item,
        quantity: Number(item.quantity),
      })),
    })

    push(`/personagens/${persona?.nome}`)
  }

  return (
    <main className="min-h-screen p-8 text-black bg-white dark:bg-gray-900 dark:text-white">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="grid grid-cols-2 gap-4 pt-32 justify-center items-center"
        style={{
          gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <div className="w-1/5 absolute top-0 right-0 mt-4 mr-4 ">
          <PrimeButton text="Salvar alteração" submit />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">Ficha</h1>

          <FormTextInput
            control={control}
            name="userName"
            label="Nome do personagem"
            placeholder="Nome do personagem"
          />

          <FormTextInput
            control={control}
            name="level"
            label="Level"
            placeholder="Seu level"
            type="number"
          />

          <FormTextInput
            control={control}
            name="exp"
            label="Experiência"
            placeholder="Suas experiências(em números)"
            type="number"
          />

          <FormTextInput
            control={control}
            name="gold"
            label="Gold"
            type="number"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">Atributos</h1>

          <div className="grid grid-cols-2 gap-x-2">
            <FormTextInput
              control={control}
              name="attributes.hp"
              label="HP"
              type="number"
            />

            <FormTextInput
              control={control}
              name="attributes.mp"
              label="MP"
              type="number"
            />

            <FormTextInput
              control={control}
              name="attributes.str"
              label="Força"
              type="number"
            />

            <FormTextInput
              control={control}
              name="attributes.agl"
              label="Agilidade"
              type="number"
            />

            <FormTextInput
              control={control}
              name="attributes.dex"
              label="Destreza"
              type="number"
            />

            <FormTextInput
              control={control}
              name="attributes.con"
              label="Constituição"
              type="number"
            />

            <FormTextInput
              control={control}
              name="attributes.int"
              label="Inteligêcia"
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">Fobias</h1>

          {fields3.map((field, index) => (
            <div key={field.id} className="flex flex-row gap-2 items-center">
              <FormTextInput
                control={control}
                name={`phobias.${index}.phobia`}
                label="Fobia"
              />

              <FormTextInput
                control={control}
                name={`phobias.${index}.amount`}
                label="Quantidade"
                type="number"
              />

              {index === 0 ? (
                <FaCirclePlus
                  className="text-4xl cursor-pointer"
                  onClick={() => append3({ phobia: '', amount: '' })}
                />
              ) : (
                <FaCircleXmark
                  className="text-4xl cursor-pointer"
                  onClick={() => remove3(index)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">MaxAtk/MaxDef</h1>

          <div className="grid grid-cols-2 gap-x-2">
            <FormTextInput
              control={control}
              name="maxAtkDef.maxAtk"
              label="MaxAtk"
              type="number"
            />

            <FormTextInput
              control={control}
              name="maxAtkDef.maxDef"
              label="MaxDef"
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">Habilidades/Desgaste</h1>

          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-row gap-2 items-center">
              <FormTextInput
                control={control}
                name={`abilities.${index}.ability`}
                label="Habilidade"
              />

              <FormTextInput
                control={control}
                name={`abilities.${index}.wear`}
                label="Desgaste"
                type="number"
              />

              <FormTextInput
                control={control}
                name={`abilities.${index}.cost`}
                label="Custo"
                type="number"
              />

              {index === 0 ? (
                <FaCirclePlus
                  className="text-4xl cursor-pointer"
                  onClick={() => append({ ability: '', wear: '', cost: '' })}
                />
              ) : (
                <FaCircleXmark
                  className="text-4xl cursor-pointer"
                  onClick={() => remove(index)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">Inventário/Quantidade</h1>

          {fields2.map((field, index) => (
            <div key={field.id} className="flex flex-row gap-2 items-center">
              <FormTextInput
                control={control}
                name={`inventory.${index}.itemName`}
                label="Item"
              />

              <FormTextInput
                control={control}
                name={`inventory.${index}.quantity`}
                label="Quantidade"
                type="number"
              />

              {index === 0 ? (
                <FaCirclePlus
                  className="text-4xl cursor-pointer"
                  onClick={() => append2({ itemName: '', quantity: '' })}
                />
              ) : (
                <FaCircleXmark
                  className="text-4xl cursor-pointer"
                  onClick={() => remove2(index)}
                />
              )}
            </div>
          ))}
        </div>
      </form>
    </main>
  )
}
