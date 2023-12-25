'use client'

import { Personagem } from '@/models/rpgDTO'

export function api() {
  const baseUrl = `http://localhost:3333/heroes`

  const callApi = {
    get: async () => {
      const response = await fetch(baseUrl)
      const data = await response.json()
      return data
    },
    post: async (body: Personagem) => {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      return data
    },
    put: async (body: Personagem) => {
      const response = await fetch(baseUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      return data
    },
    delete: async () => {
      const response = await fetch(baseUrl, { method: 'DELETE' })
      const data = await response.json()
      return data
    },
  }

  const { get, post, put, delete: del } = callApi

  return { get, post, put, del }
}
