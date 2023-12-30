import { Personagem } from '@/models/rpgDTO'
import { create } from 'zustand'

interface useAppForm {
  persona: Personagem
  setPersona: (persona: Personagem) => void
}

const useStoreForm = create<useAppForm>((set) => ({
  persona: {} as Personagem,
  setPersona: (persona: Personagem) => set({ persona }),
}))

export function useAppForm() {
  const { persona, setPersona } = useStoreForm()
  return { persona, setPersona }
}
