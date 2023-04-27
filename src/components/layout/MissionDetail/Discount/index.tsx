import React from 'react'
import { Container, Text } from './style'

interface DiscoubtProps {
  text: string
}

export const Discount: React.FC<DiscoubtProps> = ({ text }) => {
  return (
    <Container>
      <Text>Cupom de desconto</Text>
      {/* <Text>R$ 50,00</Text> */}
      <Text>{text}</Text>
    </Container>
  )
}
