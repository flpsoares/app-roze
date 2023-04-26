import React from 'react'
import { Text } from 'react-native'
import {
  Avatar,
  AvatarArea,
  Container,
  Email,
  Item,
  ItemText,
  List,
  Name,
  ProfileArea
} from './style'
import { useNavigate } from '../../contexts/NavigateContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '../../contexts/AuthContext'

export const CustomDrawer: React.FC = () => {
  const {
    navigateToMissionsStackRoutes,
    navigateToCoupons,
    navigateToSupport,
    navigateToLogin
  } = useNavigate()

  const { setHasUser } = useAuth()

  const logOut = () => {
    AsyncStorage.removeItem('key')
    navigateToLogin()
    setHasUser(false)
  }

  return (
    <Container>
      <ProfileArea>
        <AvatarArea>
          <Avatar source={require('../../../public/assets/Auth/banner.png')} />
        </AvatarArea>
        <Name>Carlos André</Name>
        <Email>andre_exemplo@gmail.com</Email>
      </ProfileArea>
      <List>
        <Item>
          <ItemText>Perfil</ItemText>
        </Item>
        <Item onPress={navigateToMissionsStackRoutes}>
          <ItemText>Minhas missões</ItemText>
        </Item>
        <Item onPress={navigateToCoupons}>
          <ItemText>Meus cupons</ItemText>
        </Item>
        <Item onPress={navigateToSupport}>
          <ItemText>Suporte</ItemText>
        </Item>
        {/* <Item>
          <ItemText>Termos</ItemText>
        </Item> */}
        <Item onPress={logOut}>
          <ItemText>Sair</ItemText>
        </Item>
      </List>
    </Container>
  )
}
