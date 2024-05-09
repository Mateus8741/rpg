'use client'

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rpg-api-898n.onrender.com/forms',
  // baseURL: 'http://localhost:3100/forms',
  // baseURL: 'https://db-rpg-vercel.vercel.app/heroes',
})
