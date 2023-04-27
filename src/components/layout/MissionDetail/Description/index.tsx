import React from 'react'
import { Container, Text, Title } from './style'

interface DescriptionProps {
  text: string
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <Container>
      <Title>Descrição da missão</Title>
      <Text>{text}</Text>
    </Container>
  )
}
