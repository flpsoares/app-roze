import React, { useEffect, useState } from 'react'
import {
  ButtonDelete,
  Container,
  Content,
  Date,
  Icon,
  Line,
  Text,
  Title
} from './style'
import { Ionicons, AntDesign } from '@expo/vector-icons'

interface NotificationProps {
  title: string
  text: string
  id: string
  criado: string
}

export const Notification: React.FC = () => {
  return (
    <Container>
      {/* <Line></Line> */}
      <Icon>
        <Ionicons name="notifications-outline" color="#ccc" size={22} />
      </Icon>
      <Title>
        Título <Date>00/00/0000</Date>
      </Title>
      <Text>Lorem ipsum dolor sit amet consectetur</Text>
      {/* {text.split('-').map((s: any, index: number) => {
        return <Content key={index}>{s}</Content>
      })} */}
      <ButtonDelete>
        <AntDesign name="close" color="red" size={20} />
      </ButtonDelete>
    </Container>
  )
}
