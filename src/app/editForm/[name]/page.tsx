'use client'

import { api } from '@/api/api'
import { FormTextInput } from '@/components/Form/FormTextInput'
import PrimeButton from '@/components/PrimeButton'
import { Personagem } from '@/models/rpgDTO'
import { CreateFormSchema, createFormSchema } from '@/schema/createFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { FaCirclePlus, FaCircleXmark } from 'react-icons/fa6'

interface EditFormProps {
  params: {
    name: string
  }
}

export default function EditForm({ params: { name } }: EditFormProps) {
  const [data, setData] = useState<Personagem[]>([])

  // const { persona } = useAppForm()
  const { push } = useRouter()

  async function getPersonaToEdit() {
    const perso = await api.get('')
    setData(perso.data)
  }

  const persona = data.find((persona) => persona.nome === name)

  console.log(name)

  console.log(data)

  console.log(persona)

  useEffect(() => {
    getPersonaToEdit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { control, handleSubmit } = useForm<CreateFormSchema>({
    resolver: zodResolver(createFormSchema),

    values: {
      nome: persona?.nome || '',
      level: persona?.level?.toString() || '',
      exp: persona?.exp?.toString() || '',
      gold: persona?.gold?.toString() || '',
      atributos: {
        hp: persona?.atributos?.hp?.toString() || '',
        mp: persona?.atributos?.mp?.toString() || '',
        forca: persona?.atributos?.forca?.toString() || '',
        agilidade: persona?.atributos?.agilidade?.toString() || '',
        destreza: persona?.atributos?.destreza?.toString() || '',
        constituicao: persona?.atributos?.constituicao?.toString() || '',
        inteligencia: persona?.atributos?.inteligencia?.toString() || '',
      },
      fobias: persona?.fobias.map((phobia) => ({
        monstro: phobia.monstro,
        quantidade: phobia.quantidade.toString(),
      })) || [
        {
          monstro: '',
          quantidade: '',
        },
      ],
      status: {
        maxAtk: persona?.status?.maxAtk?.toString() || '',
        maxDef: persona?.status?.maxDef?.toString() || '',
      },
      habilidade: persona?.habilidade.map((ability) => ({
        nome: ability.nome,
        desgaste: ability.desgaste.toString(),
        custoMP: ability.custoMP.toString(),
      })) || [
        {
          nome: '',
          desgaste: '',
          custoMP: '',
        },
      ],
      inventario: persona?.inventario.map((item) => ({
        nome: item.nome,
        quantidade: item.quantidade.toString(),
      })) || [
        {
          nome: '',
          quantidade: '',
        },
      ],
    },

    mode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'habilidade',
  })

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: 'inventario',
  })

  const {
    fields: fields3,
    append: append3,
    remove: remove3,
  } = useFieldArray({
    control,
    name: 'fobias',
  })

  function handleSubmitForm(data: CreateFormSchema) {
    api.put(`/${persona?.id}`, {
      nome: data.nome,
      level: Number(data.level),
      exp: Number(data.exp),
      gold: Number(data.gold),
      atributos: {
        ...data.atributos,
        hp: Number(data.atributos.hp),
        mp: Number(data.atributos.mp),
        str: Number(data.atributos.forca),
        agl: Number(data.atributos.agilidade),
        dex: Number(data.atributos.destreza),
        con: Number(data.atributos.constituicao),
        int: Number(data.atributos.inteligencia),
      },
      fobias: data.fobias.map((phobia) => ({
        ...phobia,
        quantidade: Number(phobia.quantidade),
      })),
      status: {
        maxAtk: Number(data.status.maxAtk),
        maxDef: Number(data.status.maxDef),
      },
      habilidade: data.habilidade.map((ability) => ({
        ...ability,
        desgaste: Number(ability.desgaste),
        custoMP: Number(ability.custoMP),
      })),
      inventario: data.inventario.map((item) => ({
        ...item,
        quantidade: Number(item.quantidade),
      })),
    })

    if (persona?.nome === undefined) {
      push('/not-found')
    } else {
      push(`/personagens/${persona?.nome}`)
    }
  }

  function handleCancel() {
    push(`/personagens/${persona?.nome}`)
  }

  return (
    <>
      <main className="min-h-screen text-black bg-white dark:bg-gray-900 dark:text-white">
        <div className="flex flex-row p-5 gap-x-12 z-10 w-full fixed bg-gray-900 shadow-md">
          <PrimeButton text="Cancelar" onClick={handleCancel} />
          <PrimeButton text="Salvar alteração" submit />
        </div>

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
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-5">Status</h1>

            <FormTextInput
              control={control}
              name="nome"
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
                name="atributos.hp"
                label="HP"
                type="number"
              />

              <FormTextInput
                control={control}
                name="atributos.mp"
                label="MP"
                type="number"
              />

              <FormTextInput
                control={control}
                name="atributos.forca"
                label="Força"
                type="number"
              />

              <FormTextInput
                control={control}
                name="atributos.agilidade"
                label="Agilidade"
                type="number"
              />

              <FormTextInput
                control={control}
                name="atributos.destreza"
                label="Destreza"
                type="number"
              />

              <FormTextInput
                control={control}
                name="atributos.constituicao"
                label="Constituição"
                type="number"
              />

              <FormTextInput
                control={control}
                name="atributos.inteligencia"
                label="Inteligêcia"
                type="number"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3">
              <h1 className="text-3xl font-bold mb-5">Fobias</h1>

              <FaCirclePlus
                className="text-4xl cursor-pointer"
                onClick={() => append3({ monstro: '', quantidade: '' })}
              />
            </div>

            {fields3.map((field, index) => (
              <div key={field.id} className="flex flex-row gap-2 items-center">
                <FormTextInput
                  control={control}
                  name={`fobias.${index}.monstro`}
                  label="Fobia"
                />

                <FormTextInput
                  control={control}
                  name={`fobias.${index}.quantidade`}
                  label="Quantidade"
                  type="number"
                />

                <FaCircleXmark
                  className="text-4xl cursor-pointer"
                  onClick={() => remove3(index)}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-5">MaxAtk/MaxDef</h1>

            <div className="grid grid-cols-2 gap-x-2">
              <FormTextInput
                control={control}
                name="status.maxAtk"
                label="MaxAtk"
                type="number"
              />

              <FormTextInput
                control={control}
                name="status.maxDef"
                label="MaxDef"
                type="number"
              />
            </div>
          </div>

          <div className="flex flex-col px-8 items-center justify-center">
            <div className="flex flex-row gap-3">
              <h1 className="text-3xl font-bold mb-5">Habilidades/Desgaste</h1>

              <FaCirclePlus
                className="text-4xl cursor-pointer"
                onClick={() => append({ nome: '', desgaste: '', custoMP: '' })}
              />
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex flex-row gap-2 items-center">
                <FormTextInput
                  control={control}
                  name={`habilidade.${index}.nome`}
                  label="Habilidade"
                />

                <FormTextInput
                  control={control}
                  name={`habilidade.${index}.desgaste`}
                  label="Desgaste"
                  type="number"
                />

                <FormTextInput
                  control={control}
                  name={`habilidade.${index}.custoMP`}
                  label="Custo"
                  type="number"
                />

                <FaCircleXmark
                  className="text-4xl cursor-pointer"
                  onClick={() => remove(index)}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col px-8 items-center justify-center">
            <div className="flex flex-row gap-3">
              <h1 className="text-3xl font-bold mb-5">Inventário/Quantidade</h1>

              <FaCirclePlus
                className="text-4xl cursor-pointer"
                onClick={() => append2({ nome: '', quantidade: '' })}
              />
            </div>

            {fields2.map((field, index) => (
              <div key={field.id} className="flex flex-row gap-2 items-center">
                <FormTextInput
                  control={control}
                  name={`inventario.${index}.nome`}
                  label="Item"
                />

                <FormTextInput
                  control={control}
                  name={`inventario.${index}.quantidade`}
                  label="Quantidade"
                  type="number"
                />

                <FaCircleXmark
                  className="text-4xl cursor-pointer"
                  onClick={() => remove2(index)}
                />
              </div>
            ))}
          </div>
        </form>
      </main>
    </>
  )
}
