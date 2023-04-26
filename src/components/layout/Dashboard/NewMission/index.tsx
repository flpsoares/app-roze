import React, { useState } from 'react'
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
import { Dimensions, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigate } from '../../../../contexts/NavigateContext'

interface ItemProps {
  id: number
  title: string
  image: string
}

export const NewMission: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const screenWidth = Dimensions.get('window').width

  const { navigateToNewMissions } = useNavigate()

  const items: ItemProps[] = [
    {
      id: 1,
      title: 'Item 1',
      image: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 2,
      title: 'Item 2',
      image: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 3,
      title: 'Item 3',
      image: 'https://picsum.photos/id/3/200/300'
    }
  ]

  const renderItem = ({ item }: { item: ItemProps }) => (
    <ItemContainer>
      <ItemImage source={{ uri: item.image }} />
      <ItemTitle>{item.title}</ItemTitle>
      <ItemSubtitle>Restaurante xxxx</ItemSubtitle>
      <ItemButton>
        <ItemButtonText>
          Participar
          <Icon name="right" size={14} />
        </ItemButtonText>
      </ItemButton>
    </ItemContainer>
  )

  const renderPagination = () => (
    <PaginationContainer>
      {items.map((_, index) => (
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
          data={items}
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
