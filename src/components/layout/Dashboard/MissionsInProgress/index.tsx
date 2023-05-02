import React, { useEffect, useState } from 'react'
import {
  ButtonSeeAll,
  ButtonSeeAllText,
  Container,
  Header,
  ItemContainer,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemStatus,
  ItemTitle,
  Left,
  List,
  Title
} from './style'
import MissionsApi from '../../../../services/MissionsApi'
import { useUser } from '../../../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'
import { useNavigate } from '../../../../contexts/NavigateContext'
import { ActivityIndicator, View } from 'react-native'
import { primary } from '../../../../styles/globalVar'

export const MissionsInProgress: React.FC = () => {
  const { userKey } = useUser()
  const { navigateToMissionsStackRoutes } = useNavigate()

  const [missions, setMissions] = useState<App.MissionInProgress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (userKey) {
      MissionsApi.listMissionsInProgress(userKey)
        .then((res) => setMissions(res.data.slice(0, 6)))
        .finally(() => setIsLoading(false))
    }
  }, [userKey, isFocused])

  // const renderItem = ({ item }: { item: ItemProps }) => (
  //   <ItemContainer>
  //     <Left>
  //       <ItemImage source={{ uri: item.image }} />
  //       <ItemInfo>
  //         <ItemTitle>{item.title}</ItemTitle>
  //         <ItemName>{item.name}</ItemName>
  //       </ItemInfo>
  //     </Left>
  //     <ItemStatus status={item.status}>{item.status}</ItemStatus>
  //   </ItemContainer>
  // )

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={primary} size="large" />
      </View>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Missões em andamento</Title>
        <ButtonSeeAll onPress={navigateToMissionsStackRoutes}>
          <ButtonSeeAllText>Ver tudo</ButtonSeeAllText>
        </ButtonSeeAll>
      </Header>
      {missions.map((item, index) => {
        return (
          <ItemContainer key={index}>
            <Left>
              <ItemImage source={{ uri: item.img }} />
              <ItemInfo>
                <ItemTitle>{item.store}</ItemTitle>
                <ItemName>{item.name}</ItemName>
              </ItemInfo>
            </Left>
            {item.status === 'pending' && (
              <ItemStatus status={item.status}>Pendente</ItemStatus>
            )}
            {item.status === 'approved' && (
              <ItemStatus status={item.status}>Aprovado</ItemStatus>
            )}
            {item.status === 'reject' && (
              <ItemStatus status={item.status}>Rejeitado</ItemStatus>
            )}
            {item.status === 'work' && (
              <ItemStatus status={item.status}>Em andamento</ItemStatus>
            )}
          </ItemContainer>
        )
      })}
    </Container>
  )
}
