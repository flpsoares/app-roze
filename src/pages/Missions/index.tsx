import React, { useEffect, useState } from 'react'
import { Button, ButtonText, ButtonsArea, Container, Title, Wrapper } from './style'
import { Header } from '../../components/Header'
import { MissionListItem } from '../../components/MissionListItem'
import { FlatList } from 'react-native'
import MissionsApi from '../../services/MissionsApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUser } from '../../contexts/AuthContext'

export const Missions: React.FC = () => {
  const { userKey } = useUser()

  const [missions, setMissions] = useState<App.MissionInProgress[]>([])

  const [isPending, setIsPending] = useState(true)
  const [isApproved, setIsApproved] = useState(false)
  const [isReject, setIsReject] = useState(false)

  const activePending = () => {
    setIsPending(true)
    setIsApproved(false)
    setIsReject(false)
  }

  const activeApproved = () => {
    setIsPending(false)
    setIsApproved(true)
    setIsReject(false)
  }

  const activeReject = () => {
    setIsPending(false)
    setIsApproved(false)
    setIsReject(true)
  }

  useEffect(() => {
    MissionsApi.listMissionsInProgress(userKey).then((res) => setMissions(res.data))
  }, [])

  return (
    <Container>
      <Header title="Minhas missões" />
      <ButtonsArea>
        <Button onPress={activePending} isActive={isPending}>
          <ButtonText isActive={isPending}>Pendentes</ButtonText>
        </Button>
        <Button onPress={activeApproved} isActive={isApproved}>
          <ButtonText isActive={isApproved}>Aprovados</ButtonText>
        </Button>
        <Button onPress={activeReject} isActive={isReject}>
          <ButtonText isActive={isReject}>Reprovados</ButtonText>
        </Button>
      </ButtonsArea>
      <Wrapper>
        <Title>Missões em andamento</Title>
        {missions?.map((item, index) => {
          return (
            <MissionListItem
              id={item.id}
              id_camp={item.id_camp}
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
