import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ActiveCoupons } from '../../components/layout/Dashboard/ActiveCoupons'
import { NewMission } from '../../components/layout/Dashboard/NewMission'
import { Container, ScrollableContainer } from './style'
import { MissionsInProgress } from '../../components/layout/Dashboard/MissionsInProgress'
import CouponsApi from '../../services/CouponsApi'
import { useUser } from '../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'

export const Dashboard: React.FC = () => {
  const { userKey } = useUser()

  const [coupons, setCoupons] = useState<App.Coupom[]>([])
  const isFocused = useIsFocused()

  useEffect(() => {
    CouponsApi.list(userKey).then((res) => {
      setCoupons(res.data)
    })
  }, [isFocused])

  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header title="Bem vindo usuário" />
        {coupons.length > 0 && <ActiveCoupons quantity={coupons.length} />}
        <NewMission />
        <MissionsInProgress />
      </Container>
    </ScrollableContainer>
  )
}
