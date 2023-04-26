import { Alert } from 'react-native'
import { api } from './api'

class AuthApi {
  public async register(data: App.Register) {
    const fd = new FormData()
    fd.append('name', data.name)
    fd.append('email', data.email)
    fd.append('birth', data.birth)
    fd.append('tel', data.tel)
    fd.append('pwd', data.pwd)
    fd.append('street', data.street)
    fd.append('city', data.city)
    fd.append('state', data.state)
    fd.append('social_link', data.social_link)
    fd.append('social_link_2', data.social_link_2)

    console.log(fd)

    return api
      .post('/actions/register_app', fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .catch((e: any) => {
        Alert.alert('Erro', e.response.data.error)
      })
  }

  public async login({ email, pwd }) {
    return api.post('/actions/login_app', { email, pwd })
  }
}

export default new AuthApi()
