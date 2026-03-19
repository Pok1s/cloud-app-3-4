import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_URL

if (!apiBaseUrl) {
  throw new Error('Brak VITE_API_URL w konfiguracji srodowiska.')
}

export const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
})
