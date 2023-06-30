import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backendserver.cloud/roze'
})
