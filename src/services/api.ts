import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://app.rozeapp.com.br/backend'
})
