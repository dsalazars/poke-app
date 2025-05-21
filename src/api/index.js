import axios from 'axios'

const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

pokeApi.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      console.error('Error del servidor:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      })
    } else if (error.request) {
      console.error('Sin respuesta del servidor:', error.request)
    } else {
      console.error('Error al configurar la solicitud:', error.message)
    }

    return Promise.reject({
      message: error.message,
    status: error.response?.status,
    data: error.response?.data
    })
  }
)

export default pokeApi