import React from 'react'
import { Logo } from '../../../components/Logo'
import { useNavigate } from '../../../contexts/NavigateContext'
import * as Notifications from 'expo-notifications'
import {
  Banner,
  ButtonArea,
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  ButtonRegisterText,
  Container,
  Content,
  SubTitle,
  Title
} from './style'
import { Platform } from 'react-native'
import * as Device from 'expo-device'

export const Welcome = () => {
  const { navigateToLogin, navigateToRegister } = useNavigate()

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })

  async function registerForPushNotificationsAsync() {
    let token

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      })
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      alert(token)
    } else {
      alert('Must use physical device for Push Notifications')
    }

    return token
  }

  return (
    <Container>
      <Banner source={require('../../../../public/assets/Auth/banner.png')} />
      <Logo />
      <Content>
        <Title>Bem vindo ao Roze</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum
        </SubTitle>
        <ButtonArea>
          <ButtonLogin onPress={registerForPushNotificationsAsync}>
            <ButtonLoginText>Token</ButtonLoginText>
          </ButtonLogin>
          <ButtonLogin onPress={navigateToLogin}>
            <ButtonLoginText>Entrar</ButtonLoginText>
          </ButtonLogin>
          <ButtonRegister onPress={navigateToRegister}>
            <ButtonRegisterText>Cadastra-se</ButtonRegisterText>
          </ButtonRegister>
        </ButtonArea>
      </Content>
    </Container>
  )
}
