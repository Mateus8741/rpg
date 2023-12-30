'use client'

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rpg-api-production.up.railway.app',
})
