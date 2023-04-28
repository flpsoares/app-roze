import React from 'react'
import { Button, ButtonText, Container, Line } from './style'
import { useNavigate } from '../../contexts/NavigateContext'

interface DropdownListProps {
  id: number
}

export const DropdownMissionList: React.FC<DropdownListProps> = ({ id }) => {
  const { navigateToMissionDetail } = useNavigate()

  return (
    <Container>
      <Button onPress={() => navigateToMissionDetail(id)}>
        <ButtonText>Detalhes da missão</ButtonText>
      </Button>
      <Line />
      <Button>
        <ButtonText>Enviar para aprovação</ButtonText>
      </Button>
    </Container>
  )
}