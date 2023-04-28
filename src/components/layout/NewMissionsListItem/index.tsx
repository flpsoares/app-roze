import React, { useState } from 'react'
import { Alert } from 'react-native'
import {
  ButtonSubmit,
  ButtonSubmitText,
  Container,
  Image,
  Info,
  Name,
  Title
} from './style'
import MissionsApi from '../../../services/MissionsApi'
import { useUser } from '../../../contexts/AuthContext'

interface NewMissionsListItemProps {
  id: number
  title: string
  name: string
  image: string
}

export const NewMissionsListItem: React.FC<NewMissionsListItemProps> = ({
  id,
  image,
  title,
  name
}) => {
  const { userKey } = useUser()

  const participate = () => {
    MissionsApi.sendParticipate(userKey, id).then((res) => {
      Alert.alert('Sucesso', res.data.text)
    })
  }

  return (
    <Container>
      <Image source={{ uri: image }} />
      <Info>
        <Title>{title}</Title>
        <Name>{name}</Name>
      </Info>
      <ButtonSubmit onPress={participate}>
        <ButtonSubmitText>Participar</ButtonSubmitText>
      </ButtonSubmit>
    </Container>
  )
}
