import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Button, ButtonText, ButtonsArea, Container, Title, Wrapper } from './style'
import { Header } from '../../components/Header'
import { MissionListItem } from '../../components/MissionListItem'
import { ActivityIndicator, FlatList, View } from 'react-native'
import MissionsApi from '../../services/MissionsApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUser } from '../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'
import { primary } from '../../styles/globalVar'

export const Missions: React.FC = () => {
  const { userKey } = useUser()

  const [missions, setMissions] = useState<App.MissionInProgress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused()

  const [isPending, setIsPending] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [isReject, setIsReject] = useState(false)

  const activePending = () => {
    if (isPending) {
      setIsPending(false)
    } else {
      setIsPending(true)
    }
    setIsApproved(false)
    setIsReject(false)
  }

  const activeApproved = () => {
    setIsPending(false)
    if (isApproved) {
      setIsApproved(false)
    } else {
      setIsApproved(true)
    }
    setIsReject(false)
  }

  const activeReject = () => {
    setIsPending(false)
    setIsApproved(false)
    if (isReject) {
      setIsReject(false)
    } else {
      setIsReject(true)
    }
  }

  useEffect(() => {
    MissionsApi.listMissionsWork(userKey)
      .then((res) => {
        setMissions(res.data)
      })
      .finally(() => setIsLoading(false))
  }, [isFocused])

  if (isLoading) {
    return (
      <Container>
        <Header title="Minhas missões" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color={primary} size="large" />
        </View>
      </Container>
    )
  }

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
        {/* <Title>Missões em andamento</Title> */}
        {missions
          ?.filter((m) => {
            if (isPending) {
              return m.status === 'pending'
            } else if (isApproved) {
              return m.status === 'approved'
            } else if (isReject) {
              return m.status === 'reject'
            } else return m
          })
          .map((item, index) => {
            return (
              <MissionListItem
                id={item.id}
                id_camp={item.id_camp}
                cam_name={item.cam_name}
                status={item.status}
                store={item.store}
                img={item.img}
                key={index}
              />
            )
          })}
      </Wrapper>
    </Container>
  )
}
