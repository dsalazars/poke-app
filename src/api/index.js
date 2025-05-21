import axios from 'axios'

const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

// Interceptores para manejo centralizado de errores
pokeApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('Error en la API:', error)
    return Promise.reject(error)
  }
)

export default pokeApi