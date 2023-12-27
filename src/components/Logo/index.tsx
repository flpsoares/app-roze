import React from 'react'
import { BackgroundLogo, Container, Image, Title } from './style'

export const Logo: React.FC = () => {
  return (
    <Container>
      <BackgroundLogo>
        <Image source={require('../../../assets/logo.png')} />
      </BackgroundLogo>
      <Title>Roze</Title>
    </Container>
  )
}
