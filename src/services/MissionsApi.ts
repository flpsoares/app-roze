import { Alert } from 'react-native'
import { api } from './api'

class MissionsApi {
  public async listMissionsInProgress(key: string) {
    return api.get('/app/tickets/list', { headers: { Authorization: key } })
  }

  public async listMissionsWork(key: string) {
    return api.get('/app/tickets/work', { headers: { Authorization: key } })
  }

  public async list(key: string) {
    return api.get('/app/missions/list', { headers: { Authorization: key } })
  }

  public async detail(key: string, id: number) {
    return api.post(
      '/app/missions/detail',
      { id },
      { headers: { Authorization: key } }
    )
  }

  public async sendParticipate(key: string, id: number) {
    return api.post(
      '/app/missions/accept',
      { id },
      { headers: { Authorization: key } }
    )
  }

  public async sendLink(key: string, id: number, link: string) {
    return api.post(
      '/app/missions/set_link',
      { id, link },
      { headers: { Authorization: key } }
    )
  }
}

export default new MissionsApi()
