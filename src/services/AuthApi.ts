import { Alert } from 'react-native'
import { api } from './api'
import md5 from 'md5'

class AuthApi {
  public async register(data: App.Register) {
    const fd = new FormData()
    fd.append('name', data.name)
    fd.append('email', data.email)
    fd.append('birth', data.birth)
    fd.append('tel', data.tel)
    fd.append('pwd', md5(data.pwd))
    fd.append('street', data.street)
    fd.append('city', data.city)
    fd.append('state', data.state)
    fd.append('social_link', data.social_link)
    fd.append('social_link_2', data.social_link_2)

    return api
      .post('/actions/register_app', fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .catch((e: any) => {
        Alert.alert('Erro', e.response.data.error)
      })
  }

  public async login({ email, pwd }) {
    return api.post('/actions/login_app', { email, pwd: md5(pwd) })
  }

  public async checkToken(key: string) {
    return api.post('/app/home', {}, { headers: { Authorization: key } })
  }
}

export default new AuthApi()
