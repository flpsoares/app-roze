import React from 'react'
import { Container, Right, Title } from './style'

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigate } from '../../contexts/NavigateContext'

interface HeaderProps {
  title: string
  hasPadding?: boolean
}

export const Header: React.FC<HeaderProps> = ({ title, hasPadding }) => {
  const { openDrawerMenu } = useNavigate()

  return (
    <Container hasPadding={hasPadding}>
      <Title>{title}</Title>
      <Right>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-outline" color="#fff" size={22} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openDrawerMenu}>
          <Feather name="menu" color="#fff" size={26} />
        </TouchableOpacity>
      </Right>
    </Container>
  )
}
