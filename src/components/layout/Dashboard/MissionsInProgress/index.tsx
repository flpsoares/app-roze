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
  const { navigateToMissionsStackRoutes, navigateToMissionDetail } = useNavigate()

  const [missions, setMissions] = useState<App.MissionInProgress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused()

  const navigateToMission = (id: number, id_camp: number) => {
    navigateToMissionDetail({ id, id_camp })
  }

  useEffect(() => {
    if (userKey) {
      MissionsApi.listMissionsWork(userKey)
        .then((res) => {
          setMissions(res.data.slice(0, 6))
        })
        .finally(() => setIsLoading(false))
    }
  }, [userKey, isFocused])

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
      {missions
        .filter((m) => m.status === 'work')
        .map((item, index) => {
          return (
            <ItemContainer
              onPress={() => navigateToMission(item.id, item.id_camp)}
              key={index}
            >
              <Left>
                <ItemImage source={{ uri: item.img }} />
                <ItemInfo>
                  <ItemTitle>{item.store}</ItemTitle>
                  <ItemName>{item.cam_name}</ItemName>
                </ItemInfo>
              </Left>
              {/* {item.status === 'pending' && (
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
            )} */}
            </ItemContainer>
          )
        })}
    </Container>
  )
}
