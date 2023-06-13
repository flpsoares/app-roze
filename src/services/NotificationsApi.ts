import { Alert } from 'react-native'
import { api } from './api'

class CouponsApi {
  public async list(key: string) {
    return api.get('/app/notify/list', { headers: { Authorization: key } })
  }

  public async updateViewNotification(key: string) {
    return api.get('/app/notify/set_view', { headers: { Authorization: key } })
  }

  public async deleteNotification(key: string, id: number) {
    return api.post('/app/notify/del', { id }, { headers: { Authorization: key } })
  }
}

export default new CouponsApi()
