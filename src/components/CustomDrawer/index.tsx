import React from 'react'
import { Text } from 'react-native'
import {
  Avatar,
  AvatarArea,
  AvatarBorder,
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
import { useUser } from '../../contexts/AuthContext'
import NotificationsApi from '../../services/NotificationsApi'

export const CustomDrawer: React.FC = () => {
  const { navigateToMissionsStackRoutes, navigateToCoupons, navigateToSupport } =
    useNavigate()

  const { setHasUser, setUserKey, userKey, user } = useUser()

  const logOut = () => {
    NotificationsApi.setPushToken(userKey, '')
    AsyncStorage.removeItem('key')
    setHasUser(false)
    setUserKey('')
  }

  return (
    <Container>
      <ProfileArea>
        <AvatarArea>
          <AvatarBorder>
            <Avatar source={{ uri: user?.img }} />
          </AvatarBorder>
        </AvatarArea>
        <Name>{user?.name}</Name>
        <Email>{user?.email}</Email>
      </ProfileArea>
      <List>
        {/* <Item>
          <ItemText>Perfil</ItemText>
        </Item> */}
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
