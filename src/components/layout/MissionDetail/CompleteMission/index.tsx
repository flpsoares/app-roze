import React from 'react'
import { Container, Image, SubTitle, Title, TitleArea, Wrapper } from './style'

import { AntDesign } from '@expo/vector-icons'
import { primary } from '../../../../styles/globalVar'
import { useNavigate } from '../../../../contexts/NavigateContext'

export const CompleteMission: React.FC = () => {
  const { openDrawerMenu } = useNavigate()

  return (
    <Container>
      <Image
        source={require('../../../../../public/assets/Mission/complete-mission.png')}
      />
      <Wrapper>
        <TitleArea>
          <Title>Já completou sua missão</Title>
          <AntDesign name="right" color={primary} size={26} />
        </TitleArea>
        <SubTitle>Clique aqui e envie o vídeo para aprovação</SubTitle>
      </Wrapper>
    </Container>
  )
}
