import React from 'react'
import { Button, ButtonText, Container, Line } from './style'
import { useNavigate } from '../../contexts/NavigateContext'

interface DropdownListProps {
  id: number
  id_camp: number
}

export const DropdownMissionList: React.FC<DropdownListProps> = ({
  id,
  id_camp
}) => {
  const { navigateToMissionDetail } = useNavigate()

  return (
    <Container>
      <Button onPress={() => navigateToMissionDetail(id, id_camp)}>
        <ButtonText>Detalhes da missão</ButtonText>
      </Button>
      <Line />
      <Button>
        <ButtonText>Enviar para aprovação</ButtonText>
      </Button>
    </Container>
  )
}
