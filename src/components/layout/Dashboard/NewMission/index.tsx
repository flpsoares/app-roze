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
import { ActivityIndicator, Alert, Dimensions, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigate } from '../../../../contexts/NavigateContext'
import MissionsApi from '../../../../services/MissionsApi'
import { useUser } from '../../../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'
import { primary } from '../../../../styles/globalVar'

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
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused()

  const participate = (id: number) => {
    MissionsApi.sendParticipate(userKey, id).then((res) => {
      Alert.alert('Sucesso', res.data.text)
    })
  }
  useEffect(() => {
    if (userKey) {
      MissionsApi.list(userKey)
        .then((res) => setMissions(res.data.slice(0, 6)))
        .catch((e) => {
          console.log(e.response.data)
        })
        .finally(() => setIsLoading(false))
    }
  }, [userKey, isFocused])

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
