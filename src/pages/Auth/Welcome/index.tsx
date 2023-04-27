import React from 'react'
import { Logo } from '../../../components/Logo'
import { useNavigate } from '../../../contexts/NavigateContext'
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

export const Welcome = () => {
  const { navigateToLogin, navigateToRegister } = useNavigate()

  return (
    <Container>
      <Banner source={require('../../../../public/assets/Auth/banner.png')} />
      <Logo />
      <Content>
        <Title>Bem vindo ao Rozee</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum
        </SubTitle>
        <ButtonArea>
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
