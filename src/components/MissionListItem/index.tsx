import React, { useState } from 'react'
import { Container, Left, Image, Info, Menu, Name, Status, Title } from './style'
import { primary } from '../../styles/globalVar'
import { DropdownMissionList } from '../DropdownMissionList'
import { Entypo } from '@expo/vector-icons'

export const MissionListItem: React.FC<App.MissionInProgress> = ({
  id_camp,
  name,
  store,
  img,
  status
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Left>
        <Image source={{ uri: img }} />
        <Info>
          <Title>{store}</Title>
          <Name>{name}</Name>
        </Info>
      </Left>
      {status === 'pending' && <Status status={status}>Pendente</Status>}
      {status === 'approved' && <Status status={status}>Aprovado</Status>}
      {status === 'reject' && <Status status={status}>Rejeitado</Status>}
      {status === 'work' && <Status status={status}>Em andamento</Status>}
      <Menu>
        <Entypo
          onPress={() => setIsOpen(!isOpen)}
          name="dots-three-vertical"
          size={24}
          color={primary}
        />
      </Menu>
      {isOpen && <DropdownMissionList id={id_camp} />}
    </Container>
  )
}
