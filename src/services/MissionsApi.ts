import { Alert } from 'react-native'
import { api } from './api'

class MissionsApi {
  public async list(key: string) {
    return api.get('/app/missions/list', { headers: { Authorization: key } })
  }
}

export default new MissionsApi()
