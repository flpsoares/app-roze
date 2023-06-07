import React from 'react'
import { Container, Line, Text, Title } from './style'
import { useNavigate } from '../../contexts/NavigateContext'

interface DropdownListProps {
  coupom: App.Tickets
}

export const DropdownCouponDetail: React.FC<DropdownListProps> = ({ coupom }) => {
  return (
    <Container>
      <Text>{coupom.desc}</Text>
      <Line />
      <Title>Endereço do restaurante</Title>
      <Text>{coupom.store_loc}</Text>
    </Container>
  )
}
