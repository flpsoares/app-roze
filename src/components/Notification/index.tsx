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
import NotificationsApi from '../../services/NotificationsApi'
import { useUser } from '../../contexts/AuthContext'
import { useNotification } from '../../contexts/NotificationContext'

export const Notification: React.FC<App.Notification> = (notification) => {
  const { userKey } = useUser()
  const { makeUpdateNotifications } = useNotification()

  const deleteNotification = () => {
    NotificationsApi.deleteNotification(userKey, notification.id).then(() =>
      makeUpdateNotifications()
    )
  }

  return (
    <Container>
      <Icon>
        <Ionicons name="notifications-outline" color="#ccc" size={22} />
      </Icon>
      <Content>
        <Title>
          {notification.title} <Date>{notification.created}</Date>
        </Title>
        <Text>{notification.about}</Text>
      </Content>
      <ButtonDelete onPress={deleteNotification}>
        <AntDesign name="close" color="red" size={20} />
      </ButtonDelete>
    </Container>
  )
}
