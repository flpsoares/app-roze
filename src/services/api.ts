import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backendserver.cloud/roze'
  // baseURL: 'https://app.rozeapp.com.br/backend'
})
