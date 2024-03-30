'use client'

import { api } from '@/api/api'
import { FormTextInput } from '@/components/Form/FormTextInput'
import PrimeButton from '@/components/PrimeButton'
import { CreateFormSchema, createFormSchema } from '@/schema/createFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm } from 'react-hook-form'

import { FaCirclePlus, FaCircleXmark } from 'react-icons/fa6'

export default function CreateForm() {
  const { push } = useRouter()

  const { control, handleSubmit, watch } = useForm<CreateFormSchema>({
    resolver: zodResolver(createFormSchema),

    defaultValues: {
      nome: '',
      level: '',
      exp: '',
      gold: '',
      atributos: {
        hp: '',
        mp: '',
        forca: '',
        agilidade: '',
        destreza: '',
        constituicao: '',
        inteligencia: '',
      },
      fobias: [{ monstro: '', quantidade: '' }],
      status: { maxAtk: '', maxDef: '' },
      habilidade: [
        {
          nome: '',
          desgaste: '',
          custoMP: '',
        },
      ],
      inventario: [
        {
          nome: '',
          quantidade: '',
        },
      ],
      equipamentos: {
        cabeca: '',
        peito: '',
        luvas: '',
        botas: '',
        armaEsquerda: '',
        armaDireita: '',
      },
    },

    mode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
  })

  const name = watch('nome')

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
    api.post('', {
      id: Math.random().toString(36).substring(7),
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
      equipamentos: {
        cabeca: data.equipamentos.cabeca,
        peito: data.equipamentos.peito,
        luvas: data.equipamentos.luvas,
        botas: data.equipamentos.botas,
        armaEsquerda: data.equipamentos.armaEsquerda,
        armaDireita: data.equipamentos.armaDireita,
      },
    })

    push(`/personagens/${name}`)
  }

  function handleCancel() {
    push('/')
  }

  return (
    <>
      <main className="min-h-screen text-black bg-white dark:bg-gray-900 dark:text-white">
        <div className="flex flex-row p-5 gap-x-12 z-10 w-full fixed bg-gray-900 shadow-md">
          <PrimeButton text="Cancelar" onClick={handleCancel} />
          <PrimeButton
            text="Criar ficha"
            onClick={handleSubmit(handleSubmitForm)}
          />
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

            <div className="grid grid-cols-2 gap-x-2">
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
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-5">Equipamentos</h1>

            <div className="grid grid-cols-2 gap-x-2">
              <FormTextInput
                control={control}
                name="equipamentos.cabeca"
                label="Capacete"
              />

              <FormTextInput
                control={control}
                name="equipamentos.peito"
                label="Peito"
              />

              <FormTextInput
                control={control}
                name="equipamentos.luvas"
                label="Luvas"
              />

              <FormTextInput
                control={control}
                name="equipamentos.botas"
                label="Botas"
              />

              <FormTextInput
                control={control}
                name="equipamentos.armaEsquerda"
                label="Arma Esquerda"
              />

              <FormTextInput
                control={control}
                name="equipamentos.armaDireita"
                label="Arma Direita"
              />
            </div>
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
