import React, { useEffect, useState } from 'react'
import { Button, ButtonText, ButtonsArea, Container, Title, Wrapper } from './style'
import { Header } from '../../components/Header'
import { MissionListItem } from '../../components/MissionListItem'
import { FlatList } from 'react-native'
import MissionsApi from '../../services/MissionsApi'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Missions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [missions, setMissions] = useState<App.Mission[]>([])

  useEffect(() => {
    async function exec() {
      const key = await AsyncStorage.getItem('key')
      MissionsApi.list(key).then((res) => setMissions(res.data))
    }

    exec()
  }, [])

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
        {missions.map((item, index) => {
          return (
            <MissionListItem
              id={item.id}
              img={item.img}
              name={item.name}
              status={item.status}
              store={item.store}
              key={index}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}
