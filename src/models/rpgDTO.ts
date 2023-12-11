// Interface para os atributos do personagem
export interface Atributos {
  hp: number
  mp: number
  forca: number
  agilidade: number
  destreza: number
  constituicao: number
  inteligencia: number
}

// Interface para os equipamentos do personagem
export interface Equipamentos {
  cabeca?: string
  peito?: string
  luvas?: string
  botas?: string
}

// Interface para as fobias do personagem
export interface Fobias {
  monstro: string
  quantidadeParaSuperar: number
}

// Interface para as habilidades do personagem
export interface Habilidade {
  nome: string
  desgaste: number
  custoMP: number
}

// Interface para o inventário do personagem
export interface Inventario {
  nomeItem: string
  quantidade: number
}

// Interface para o personagem em geral
export interface Personagem {
  nome: string
  raca: string
  level: number
  experiencia: number
  atributos: Atributos
  equipamentos: Equipamentos
  fobias: Fobias[]
  ataqueMaximo: number
  defesaMaxima: number
  habilidades: Habilidade[]
  inventario: Inventario[]
}
