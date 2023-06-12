import React, { useState } from 'react'
import { Logo } from '../../../components/Logo'
import {
  KeyboardAvoidingView,
  Platform,
  Alert,
  View,
  ActivityIndicator
} from 'react-native'
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
  const { navigateToRegister, navigateToForgotPassword } = useNavigate()
  const { setHasUser, setUserKey, setUser } = useUser()

  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    setIsLoading(true)
    AuthApi.login({ email, pwd: password })
      .then(async (res) => {
        await AsyncStorage.setItem('key', res.data.key)
        setHasUser(true)
        setUserKey(res.data.key)
        AuthApi.checkToken(res.data.key)
          .then((res) => {
            setUser(res.data)
          })
          .catch((e) => {
            console.log(e.response.data.error)
            setHasUser(false)
            setUserKey('')
          })
      })
      .catch((e: any) => {
        Alert.alert('Erro', e.response.data.error)
      })
      .finally(() => setIsLoading(false))
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
            {isLoading ? (
              <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              >
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <SubmitButton onPress={handleSubmit}>
                <SubmitButtonText>Entrar</SubmitButtonText>
              </SubmitButton>
            )}

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
