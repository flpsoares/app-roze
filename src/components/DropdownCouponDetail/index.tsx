import React from 'react'
import { Container, Line, Text, Title } from './style'
import { useNavigate } from '../../contexts/NavigateContext'

interface DropdownListProps {
  id: number
}

export const DropdownCouponDetail: React.FC = () => {
  const { navigateToMissionDetail } = useNavigate()

  return (
    <Container>
      <Text>
        Economize até R$150 no restaurante lorem ipsum no seu primeiro pedido.
      </Text>
      <Text>Podendo variar entre pratos de entrada e sobremesa</Text>
      <Text>Não esqueça de compartilhar o momento com amigos e família</Text>
      <Line />
      <Title>Endereço do restaurante</Title>
      <Text>Av Lorem ipsum Número 384 Bairro Lorem, Cidade Lorem Ipsum, SP</Text>
    </Container>
  )
}
