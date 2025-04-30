import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-cadastro-usuarios-7nk8.onrender.com'
})

export default api
