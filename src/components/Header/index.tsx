import React, { useState } from 'react'
import {
  Container,
  ModalButtonClose,
  ModalContainer,
  ModalOverlay,
  Right,
  Title
} from './style'
import { Modal } from 'react-native'
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

interface HeaderProps {
  title: string
  hasPadding?: boolean
}

export const Header: React.FC<HeaderProps> = ({ title, hasPadding }) => {
  const { openDrawerMenu } = useNavigate()

  const [modalVisible, setModalVisible] = useState(false)
  const translateX = useSharedValue(300)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
    translateX.value = withTiming(modalVisible ? 300 : 0)
  }

  const closeModal = () => {
    translateX.value = withTiming(300, undefined, () => {
      runOnJS(setModalVisible)(false)
    })
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }]
    }
  })

  return (
    <Container hasPadding={hasPadding}>
      <Title>{title}</Title>
      <Right>
        <TouchableOpacity onPress={toggleModal}>
          <MaterialCommunityIcons name="bell-outline" color="#fff" size={22} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openDrawerMenu}>
          <Feather name="menu" color="#fff" size={26} />
        </TouchableOpacity>
      </Right>
      <Modal visible={modalVisible} transparent>
        <ModalOverlay onPress={closeModal}>
          <ModalContainer style={animatedStyle}>
            <ModalButtonClose onPress={closeModal}>
              <AntDesign name="close" color="#fff" size={30} />
            </ModalButtonClose>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </ModalContainer>
        </ModalOverlay>
      </Modal>
    </Container>
  )
}
