import React from 'react'
import { Container, Image, SubTitle, Title, TitleArea, Wrapper } from './style'

import { AntDesign } from '@expo/vector-icons'
import { primary } from '../../../../styles/globalVar'
import { useNavigate } from '../../../../contexts/NavigateContext'
import { useUser } from '../../../../contexts/AuthContext'

export const ActiveCoupons: React.FC = () => {
  const { navigateToCoupons } = useNavigate()

  return (
    <Container onPress={navigateToCoupons}>
      <Image
        source={require('../../../../../public/assets/Dashboard/active-coupon.png')}
      />
      <Wrapper>
        <TitleArea>
          <Title>Você possui 2 cupons ativos</Title>
          <AntDesign name="right" color={primary} size={26} />
        </TitleArea>
        <SubTitle>Clique e confira os cupons que você pode utilizar</SubTitle>
      </Wrapper>
    </Container>
  )
}
