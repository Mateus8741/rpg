'use client'

import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3333/heroes',
  baseURL: 'https://db-rpg-vercel.vercel.app/heroes',
})
