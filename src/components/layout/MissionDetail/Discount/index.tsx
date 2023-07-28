import React from 'react'
import { Container, Text } from './style'

interface DiscoubtProps {
  text: string
}

export const Discount: React.FC<DiscoubtProps> = ({ text }) => {
  return (
    <Container>
      <Text>Prêmio inicial: </Text>
      {/* <Text>R$ 50,00</Text> */}
      <Text>{text}</Text>
    </Container>
  )
}
