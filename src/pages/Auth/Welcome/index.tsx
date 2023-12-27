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
      <Banner source={require('../../../../assets/Auth/banner.png')} />
      <Logo />
      <Content>
        <Title>Bem vindo ao Roze app</Title>
        <SubTitle>
          Venha ser um influencer. Troque seus posts em redes sociais, por descontos
          e produtos.
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
