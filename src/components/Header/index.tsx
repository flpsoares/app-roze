import React, { useEffect, useState } from 'react'
import {
  Container,
  ModalButtonClose,
  ModalContainer,
  ModalHeader,
  ModalListItem,
  ModalOverlay,
  ModalTitle,
  NotificationButton,
  NotificationNumber,
  Right,
  Title
} from './style'
import { Dimensions, Modal } from 'react-native'
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS
} from 'react-native-reanimated'

import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigate } from '../../contexts/NavigateContext'
import { Notification } from '../Notification'
import { useUser } from '../../contexts/AuthContext'
import { useNotification } from '../../contexts/NotificationContext'
import { useIsFocused } from '@react-navigation/native'
import NotificationsApi from '../../services/NotificationsApi'

interface HeaderProps {
  title: string
  hasPadding?: boolean
}

export const Header: React.FC<HeaderProps> = ({ title, hasPadding }) => {
  const { userKey } = useUser()
  const { openDrawerMenu } = useNavigate()
  const { notifications, makeUpdateNotifications } = useNotification()

  const [modalVisible, setModalVisible] = useState(false)
  const isFocused = useIsFocused()

  const translateX = useSharedValue(300)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
    translateX.value = withTiming(modalVisible ? Dimensions.get('window').width : 0)
  }

  const closeModal = () => {
    translateX.value = withTiming(Dimensions.get('window').width, undefined, () => {
      runOnJS(setModalVisible)(false)
    })
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }]
    }
  })

  useEffect(() => {
    if (modalVisible) {
      NotificationsApi.updateViewNotification(userKey).then((res) => {
        makeUpdateNotifications()
      })
    }
  }, [modalVisible])

  return (
    <Container hasPadding={hasPadding}>
      <Title>{title}</Title>
      <Right>
        <NotificationButton onPress={toggleModal}>
          <MaterialCommunityIcons name="bell-outline" color="#fff" size={22} />
          {notifications.filter((n) => n.view === 0).length > 0 && (
            <NotificationNumber>
              {notifications.filter((n) => n.view === 0).length}
            </NotificationNumber>
          )}
        </NotificationButton>
        <TouchableOpacity onPress={openDrawerMenu}>
          <Feather name="menu" color="#fff" size={26} />
        </TouchableOpacity>
      </Right>
      <Modal visible={modalVisible} transparent>
        <ModalContainer
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1 }}
          style={animatedStyle}
        >
          <ModalHeader>
            <ModalTitle>Notificações</ModalTitle>
            <ModalButtonClose onPress={closeModal}>
              <AntDesign name="close" color="#fff" size={30} />
            </ModalButtonClose>
          </ModalHeader>
          <ModalListItem>
            {notifications.map((n) => {
              return (
                <Notification
                  key={n.id}
                  about={n.about}
                  created={n.created}
                  id={n.id}
                  title={n.title}
                  view={n.view}
                />
              )
            })}
          </ModalListItem>
        </ModalContainer>
      </Modal>
    </Container>
  )
}
