'use client'

import { FormTextInput } from '@/components/Form/FormTextInput'
import { useForm } from 'react-hook-form'

export default function CreateForm() {
  const { control } = useForm()

  return (
    <main className="min-h-screen text-black bg-white dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col h-screen items-center justify-center">
        <FormTextInput
          control={control}
          name="username"
          label="Nome do personagem"
          placeholder="Nome do personagem"
        />

        <FormTextInput control={control} name="level" label="Level" />

        <FormTextInput control={control} name="exp" label="Experiência" />

        <FormTextInput control={control} name="gold" label="Gold" />
      </div>
    </main>
  )
}
