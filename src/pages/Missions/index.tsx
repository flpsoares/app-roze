import React, { useState } from 'react'
import { Button, ButtonText, ButtonsArea, Container, Title, Wrapper } from './style'
import { Header } from '../../components/Header'
import { MissionListItem } from '../../components/MissionListItem'
import { FlatList } from 'react-native'

interface ItemProps {
  id: number
  title: string
  name: string
  image: string
  status: string
}

export const Missions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

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
  return (
    <Container>
      <Header title="Minhas missões" />
      <ButtonsArea>
        <Button isActive={true}>
          <ButtonText isActive={true}>Pendentes</ButtonText>
        </Button>
        <Button isActive={false}>
          <ButtonText isActive={false}>Aprovados</ButtonText>
        </Button>
        <Button isActive={false}>
          <ButtonText isActive={false}>Reprovados</ButtonText>
        </Button>
      </ButtonsArea>
      <Wrapper>
        <Title>Missões em andamento</Title>
        {items.map((item, index) => {
          return (
            <MissionListItem
              id={item.id}
              image={item.image}
              name={item.name}
              status={item.status}
              title={item.title}
              key={index}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}
