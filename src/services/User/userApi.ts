import { api } from '@/api/api'

async function getUser() {
  const response = await api.get('/user')

  return response.data
}

async function getUserById(id: number) {
  const response = await api.get(`/user/${id}`)

  return response.data
}

async function createUser(user: any) {
  const response = await api.post('/user', user)

  return response.data
}

async function updateUser(user: any) {
  const response = await api.put(`/user/${user.id}`, user)

  return response.data
}

async function deleteUser(user: any) {
  const response = await api.delete(`/user/${user.id}`)

  return response.data
}

export const userApi = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
