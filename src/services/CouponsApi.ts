import { Alert } from 'react-native'
import { api } from './api'

class CouponsApi {
  public async list(key: string) {
    return api.get('/app/tickets/tickets', { headers: { Authorization: key } })
  }
}

export default new CouponsApi()
