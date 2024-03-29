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
  armaEsquerda?: string
  armaDireita?: string
}

// Interface para as fobias do personagem
export interface Fobias {
  monstro: string
  quantidade: number
}

// Interface para as habilidades do personagem
export interface Habilidade {
  nome: string
  desgaste: number
  custoMP: number
}

// Interface para o inventário do personagem
export interface Inventario {
  nome: string
  quantidade: number
}

export interface Status {
  maxAtk: number
  maxDef: number
}

// Interface para o personagem em geral
export interface Personagem {
  id: number
  nome: string
  raca: string
  level: number
  exp: number
  gold: number
  atributos: Atributos
  equipamentos: Equipamentos
  fobias: Fobias[]
  status: Status
  habilidades: Habilidade[]
  inventario: Inventario[]
}
