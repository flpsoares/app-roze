import { Alert } from 'react-native'
import { api } from './api'

class CouponsApi {
  public async list(key: string) {
    return api.get('/app/tickets/tickets', { headers: { Authorization: key } })
  }

  public async updateView(key: string, id: number) {
    return api.post(
      '/app/tickets/set_view',
      { id },
      { headers: { Authorization: key } }
    )
  }
}

export default new CouponsApi()
