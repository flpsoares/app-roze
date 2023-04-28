import React, { useEffect, useState } from 'react'
import {
  ButtonSeeAll,
  ButtonSeeAllText,
  CarouselContainer,
  Container,
  Header,
  Icon,
  ItemButton,
  ItemButtonText,
  ItemContainer,
  ItemImage,
  ItemSubtitle,
  ItemTitle,
  PaginationContainer,
  PaginationDot,
  Title
} from './style'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Alert, Dimensions, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigate } from '../../../../contexts/NavigateContext'
import MissionsApi from '../../../../services/MissionsApi'
import { useUser } from '../../../../contexts/AuthContext'

interface ItemProps {
  id: number
  title: string
  image: string
}

export const NewMission: React.FC = () => {
  const { userKey } = useUser()

  const [activeIndex, setActiveIndex] = useState(0)
  const screenWidth = Dimensions.get('window').width

  const { navigateToNewMissions } = useNavigate()

  const [missions, setMissions] = useState<App.Mission[]>([])

  const participate = (id: number) => {
    MissionsApi.sendParticipate(userKey, id).then((res) => {
      Alert.alert('Sucesso', res.data.text)
      console.log(res.data)
    })
  }

  useEffect(() => {
    MissionsApi.list(userKey).then((res) => setMissions(res.data.slice(0, 6)))
  }, [])

  const renderItem = ({ item }: { item: App.Mission }) => (
    <ItemContainer>
      <ItemImage source={{ uri: item.img }} />
      <ItemTitle>{item.name}</ItemTitle>
      <ItemSubtitle>{item.store}</ItemSubtitle>
      <ItemButton onPress={() => participate(item.id)}>
        <ItemButtonText>
          Participar
          <Icon name="right" size={14} />
        </ItemButtonText>
      </ItemButton>
    </ItemContainer>
  )

  const renderPagination = () => (
    <PaginationContainer>
      {missions.map((_, index) => (
        <PaginationDot key={index} active={index === activeIndex} />
      ))}
    </PaginationContainer>
  )

  return (
    <Container>
      <Header>
        <Title>Inicie uma nova missão</Title>
        <ButtonSeeAll onPress={navigateToNewMissions}>
          <ButtonSeeAllText>Ver tudo</ButtonSeeAllText>
        </ButtonSeeAll>
      </Header>
      <CarouselContainer>
        <Carousel
          data={missions}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width - 70}
          itemWidth={300}
          onSnapToItem={setActiveIndex}
        />
      </CarouselContainer>
      {renderPagination()}
    </Container>
  )
}
