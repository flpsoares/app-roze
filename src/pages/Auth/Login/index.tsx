import React, { useState } from 'react'
import { Logo } from '../../../components/Logo'
import { KeyboardAvoidingView, Platform, Alert } from 'react-native'
import {
  Banner,
  ButtonArea,
  Container,
  Content,
  FormButton,
  FormButtonText,
  Input,
  InputItem,
  InputTitle,
  RegisterArea,
  RegisterButton,
  RegisterButtonText,
  RegisterText,
  ScrollableContainer,
  SubmitButton,
  SubmitButtonText,
  Title
} from './style'
import { useNavigate } from '../../../contexts/NavigateContext'
import AuthApi from '../../../services/AuthApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUser } from '../../../contexts/AuthContext'

export const Login = () => {
  const { navigateToRegister, navigateToForgotPassword, navigateToDrawer } =
    useNavigate()
  const { setHasUser, setUserKey } = useUser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    AuthApi.login({ email, pwd: password })
      .then(async (res) => {
        await AsyncStorage.setItem('key', res.data.key)
        setHasUser(true)
        setUserKey(res.data.key)
      })
      .catch((e: any) => {
        Alert.alert('Erro', e.response.data.error)
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <ScrollableContainer
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <Banner source={require('../../../../public/assets/Auth/banner.png')} />
          <Logo />
          <Content>
            <Title>Login</Title>
            <InputItem>
              <InputTitle>E-mail:</InputTitle>
              <Input
                value={email}
                onChangeText={(e) => setEmail(e)}
                autoCapitalize="none"
                placeholderTextColor="#464646"
                placeholder="E-mail@exemplo.com"
              />
            </InputItem>
            <InputItem>
              <InputTitle>Senha:</InputTitle>
              <Input
                value={password}
                onChangeText={(e) => setPassword(e)}
                placeholderTextColor="#464646"
                secureTextEntry
                placeholder="********"
              />
            </InputItem>
            <ButtonArea>
              <FormButton onPress={navigateToForgotPassword}>
                <FormButtonText>Esqueci a Senha</FormButtonText>
              </FormButton>
            </ButtonArea>
            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>Entrar</SubmitButtonText>
            </SubmitButton>
            <RegisterArea>
              <RegisterText>Não é cadastrado?</RegisterText>
              <RegisterButton onPress={navigateToRegister}>
                <RegisterButtonText>Prosseguir</RegisterButtonText>
              </RegisterButton>
            </RegisterArea>
          </Content>
        </Container>
      </ScrollableContainer>
    </KeyboardAvoidingView>
  )
}
