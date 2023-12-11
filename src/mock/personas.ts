import { Personagem } from '@/models/rpgDTO'

export const PersonaFixas: Personagem[] = [
  {
    nome: 'Aldar',
    raca: 'Elfo',
    level: 10,
    experiencia: 5000,
    atributos: {
      hp: 100,
      mp: 80,
      forca: 12,
      agilidade: 18,
      destreza: 15,
      constituicao: 14,
      inteligencia: 16,
    },
    equipamentos: {
      cabeca: 'Elmo do Poder',
      peito: 'Armadura de Aço',
      luvas: 'Luvas Ágeis',
      botas: 'Botas do Viajante',
    },
    fobias: [
      { monstro: 'Espectro Sombrio', quantidadeParaSuperar: 5 },
      { monstro: 'Aracnídeo Gigante', quantidadeParaSuperar: 3 },
    ],
    ataqueMaximo: 25,
    defesaMaxima: 30,
    habilidades: [
      { nome: 'Flecha Flamejante', desgaste: 10, custoMP: 5 },
      { nome: 'Golpe Preciso', desgaste: 8, custoMP: 4 },
    ],
    inventario: [
      { nomeItem: 'Poção de Cura', quantidade: 3 },
      { nomeItem: 'Poção de Mana', quantidade: 2 },
    ],
  },
  {
    nome: 'Elena',
    raca: 'Humano',
    level: 8,
    experiencia: 4200,
    atributos: {
      hp: 90,
      mp: 70,
      forca: 14,
      agilidade: 16,
      destreza: 13,
      constituicao: 16,
      inteligencia: 15,
    },
    equipamentos: {
      cabeca: 'Elmo Reforçado',
      peito: 'Túnica de Tecido Mágico',
      luvas: 'Luvas Resistentes',
      botas: 'Botas de Velocidade',
    },
    fobias: [
      { monstro: 'Esqueleto Errante', quantidadeParaSuperar: 4 },
      { monstro: 'Gárgula Sinistra', quantidadeParaSuperar: 2 },
    ],
    ataqueMaximo: 22,
    defesaMaxima: 28,
    habilidades: [
      { nome: 'Curar Ferimentos', desgaste: 12, custoMP: 6 },
      { nome: 'Escudo Protetor', desgaste: 10, custoMP: 5 },
    ],
    inventario: [
      { nomeItem: 'Poção de Cura', quantidade: 4 },
      { nomeItem: 'Antídoto', quantidade: 2 },
    ],
  },
  {
    nome: 'Gorim',
    raca: 'Anão',
    level: 12,
    experiencia: 7200,
    atributos: {
      hp: 120,
      mp: 60,
      forca: 16,
      agilidade: 12,
      destreza: 14,
      constituicao: 18,
      inteligencia: 12,
    },
    equipamentos: {
      cabeca: 'Elmo de Ferro',
      peito: 'Cota de Malha Anã',
      luvas: 'Manoplas de Aço',
      botas: 'Botas de Resistência',
    },
    fobias: [
      { monstro: 'Ogro Gigante', quantidadeParaSuperar: 6 },
      { monstro: 'Hidra da Montanha', quantidadeParaSuperar: 3 },
    ],
    ataqueMaximo: 28,
    defesaMaxima: 35,
    habilidades: [
      { nome: 'Investida Furiosa', desgaste: 15, custoMP: 7 },
      { nome: 'Ataque Destruidor', desgaste: 18, custoMP: 8 },
    ],
    inventario: [
      { nomeItem: 'Poção de Força', quantidade: 3 },
      { nomeItem: 'Elixir de Resistência', quantidade: 1 },
    ],
  },
]
