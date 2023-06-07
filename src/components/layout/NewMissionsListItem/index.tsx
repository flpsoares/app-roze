import React, { useState } from 'react'
import { Alert } from 'react-native'
import {
  ButtonSubmit,
  ButtonSubmitText,
  Container,
  Image,
  Info,
  Name,
  ParticipateText,
  Title
} from './style'
import MissionsApi from '../../../services/MissionsApi'
import { useUser } from '../../../contexts/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigate } from '../../../contexts/NavigateContext'

interface NewMissionsListItemProps {
  id: number
  title: string
  name: string
  image: string
  is_sub: boolean
}

export const NewMissionsListItem: React.FC<NewMissionsListItemProps> = ({
  id,
  image,
  title,
  name,
  is_sub
}) => {
  const { userKey } = useUser()
  const { navigateToMissionDetail } = useNavigate()

  const participate = () => {
    MissionsApi.sendParticipate(userKey, id).then((res) => {
      Alert.alert('Sucesso', res.data.text)
    })
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => navigateToMissionDetail({ id_camp: id })}>
        <Image source={{ uri: image }} />
      </TouchableOpacity>
      <Info>
        <Title>{title}</Title>
        <Name>{name}</Name>
      </Info>
      {is_sub ? (
        <ParticipateText>Participante</ParticipateText>
      ) : (
        <ButtonSubmit onPress={participate}>
          <ButtonSubmitText>Participar</ButtonSubmitText>
        </ButtonSubmit>
      )}
    </Container>
  )
}
