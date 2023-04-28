import React, { useEffect, useState } from 'react'
import { Container, Image, SubTitle, Title, TitleArea, Wrapper } from './style'

import { AntDesign } from '@expo/vector-icons'
import { primary } from '../../../../styles/globalVar'
import { useNavigate } from '../../../../contexts/NavigateContext'
import { useUser } from '../../../../contexts/AuthContext'
import CouponsApi from '../../../../services/CouponsApi'

interface ActiveCouponsProps {
  quantity: number
}

export const ActiveCoupons: React.FC<ActiveCouponsProps> = ({ quantity }) => {
  const { navigateToCoupons } = useNavigate()

  return (
    <Container onPress={navigateToCoupons}>
      <Image
        source={require('../../../../../public/assets/Dashboard/active-coupon.png')}
      />
      <Wrapper>
        <TitleArea>
          {quantity > 1 ? (
            <Title>Você possui {quantity} cupons ativos</Title>
          ) : (
            <Title>Você possui 1 cupom ativo</Title>
          )}

          <AntDesign name="right" color={primary} size={26} />
        </TitleArea>
        {quantity > 1 ? (
          <SubTitle>Clique e confira os cupons que você pode utilizar</SubTitle>
        ) : (
          <SubTitle>Clique e confira o cupom que você pode utilizar</SubTitle>
        )}
      </Wrapper>
    </Container>
  )
}
