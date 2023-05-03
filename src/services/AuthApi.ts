import { Alert } from 'react-native'
import { api } from './api'
import md5 from 'md5'

class AuthApi {
  public async register(data: App.Register) {
    const apiUrl = 'https://digitalott.host/roze/actions/register_app'

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
    fd.append('img', data.img)

    const options = {
      method: 'POST',
      body: fd,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }

    return fetch(apiUrl, options)
      .then((res) => res.json())
      .then((res) => res.text)
      .catch((e) => {
        console.log(e)
        Alert.alert('Erro', 'Erro desconhecido')
      })

    // return api
    //   .post(
    //     '/actions/register_app',
    //     { fd },
    //     {
    //       headers: { 'Content-Type': 'multipart/form-data' }
    //     }
    //   )
    //   .catch((e: any) => {
    //     Alert.alert('Erro', e.response.data.error)
    //     console.log('catch dentro do services')
    //   })
  }

  public async login({ email, pwd }) {
    return api.post('/actions/login_app', { email, pwd: md5(pwd) })
  }

  public async checkToken(key: string) {
    return api.post('/app/home', {}, { headers: { Authorization: key } })
  }

  public async sendMailToReset(email: string) {
    return api.post('/actions/reset_app/forgot_app', { email })
  }

  public async sendCodeToReset(code: string, email: string) {
    return api.post('/actions/reset_app/check_code', { code, email })
  }

  public async sendPasswordToReset(key: string, pwd: string, email: string) {
    return api.post('/actions/reset_app/reset_pwd', { pwd: md5(pwd), email, key })
  }
}

export default new AuthApi()
