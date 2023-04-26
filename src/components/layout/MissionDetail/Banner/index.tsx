import React, { useState } from 'react'
import { Image, PaginationContainer, PaginationDot } from './style'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

interface ItemProps {
  id: number
  uri: string
}

export const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const items: ItemProps[] = [
    {
      id: 1,
      uri: 'https://picsum.photos/id/1/200/300'
    },
    {
      id: 2,
      uri: 'https://picsum.photos/id/2/200/300'
    },
    {
      id: 3,
      uri: 'https://picsum.photos/id/3/200/300'
    }
  ]

  const renderItem = ({ item }: { item: ItemProps }) => (
    <Image source={{ uri: item.uri }} />
  )

  const renderPagination = () => (
    <PaginationContainer>
      {items.map((_, index) => (
        <PaginationDot key={index} active={index === activeIndex} />
      ))}
    </PaginationContainer>
  )

  return (
    <>
      <View>
        <Carousel
          data={items}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={setActiveIndex}
        />
      </View>
      {renderPagination()}
    </>
  )
}
