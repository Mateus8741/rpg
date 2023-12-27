'use client'

import { FormTextInput } from '@/components/Form/FormTextInput'
import PrimeButton from '@/components/PrimeButton'
import { CreateFormSchema, createFormSchema } from '@/schema/createFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'

import { FaCirclePlus, FaCircleXmark } from 'react-icons/fa6'

export default function CreateForm() {
  const { control, handleSubmit } = useForm<CreateFormSchema>({
    resolver: zodResolver(createFormSchema),

    defaultValues: {
      userName: '',
      level: '',
      exp: '',
      gold: '',
      attributes: {
        hp: '',
        mp: '',
        str: '',
        agl: '',
        dex: '',
        con: '',
        int: '',
      },
      abilities: [
        {
          ability: '',
          wear: '',
          cost: '',
        },
      ],
      inventory: [
        {
          itemName: '',
          quantity: '',
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

  function handleSubmitForm(data: CreateFormSchema) {
    console.log({
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
          <PrimeButton text="Criar ficha" submit />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5">Criar ficha</h1>

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
