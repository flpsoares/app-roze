import React, { useState } from 'react'
import {
  ButtonSubmit,
  ButtonSubmitText,
  Container,
  Image,
  Info,
  Name,
  Title
} from './style'

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
  return (
    <Container>
      <Image source={{ uri: image }} />
      <Info>
        <Title>{title}</Title>
        <Name>{name}</Name>
      </Info>
      <ButtonSubmit>
        <ButtonSubmitText>Participar</ButtonSubmitText>
      </ButtonSubmit>
    </Container>
  )
}
