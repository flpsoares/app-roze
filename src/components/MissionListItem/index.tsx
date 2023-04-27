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
      {status && <Status status={status}>{status}</Status>}
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
