import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8083/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const login = async (credentials) => {
  return await api.post('/auth/login', credentials)
}
