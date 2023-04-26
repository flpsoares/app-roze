import React, { useState } from 'react'
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

interface ItemProps {
  id: number
  title: string
  name: string
  image: string
  status: string
}

export const MissionsInProgress: React.FC = () => {
  const items: ItemProps[] = [
    {
      id: 1,
      title: 'Item 1',
      name: 'Nome 1',
      status: 'Aceita',
      image: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 2,
      title: 'Item 2',
      name: 'Nome 2',
      status: 'Pendente',
      image: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 3,
      title: 'Item 3',
      name: 'Nome 3',
      status: 'Recusada',
      image: 'https://picsum.photos/id/3/200/300'
    },
    {
      id: 4,
      title: 'Item 1',
      name: 'Nome 1',
      status: 'Aceita',
      image: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 5,
      title: 'Item 2',
      name: 'Nome 2',
      status: 'Pendente',
      image: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 6,
      title: 'Item 3',
      name: 'Nome 3',
      status: 'Recusada',
      image: 'https://picsum.photos/id/3/200/300'
    },
    {
      id: 7,
      title: 'Item 1',
      name: 'Nome 1',
      status: 'Aceita',
      image: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 8,
      title: 'Item 2',
      name: 'Nome 2',
      status: 'Pendente',
      image: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 9,
      title: 'Item 3',
      name: 'Nome 3',
      status: 'Recusada',
      image: 'https://picsum.photos/id/3/200/300'
    }
  ]

  const renderItem = ({ item }: { item: ItemProps }) => (
    <ItemContainer>
      <Left>
        <ItemImage source={{ uri: item.image }} />
        <ItemInfo>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemName>{item.name}</ItemName>
        </ItemInfo>
      </Left>
      <ItemStatus status={item.status}>{item.status}</ItemStatus>
    </ItemContainer>
  )

  return (
    <Container>
      <Header>
        <Title>Missões em andamento</Title>
        <ButtonSeeAll>
          <ButtonSeeAllText>Ver tudo</ButtonSeeAllText>
        </ButtonSeeAll>
      </Header>
      {items.map((item, index) => {
        return (
          <ItemContainer key={index}>
            <Left>
              <ItemImage source={{ uri: item.image }} />
              <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemName>{item.name}</ItemName>
              </ItemInfo>
            </Left>
            <ItemStatus status={item.status}>{item.status}</ItemStatus>
          </ItemContainer>
        )
      })}
    </Container>
  )
}
