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
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Dimensions, Text, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import MissionsApi from '../../../../services/MissionsApi'
import { useUser } from '../../../../contexts/AuthContext'

interface ItemProps {
  id: number
  title: string
  name: string
  image: string
  status: string
}

export const MissionsInProgress: React.FC = () => {
  const { userKey } = useUser()

  const [missions, setMissions] = useState<App.MissionInProgress[]>([])

  useEffect(() => {
    MissionsApi.listMissionsInProgress(userKey).then((res) => setMissions(res.data))
  }, [])

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

  return (
    <Container>
      <Header>
        <Title>Missões em andamento</Title>
        <ButtonSeeAll>
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
