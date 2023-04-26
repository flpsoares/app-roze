import React from 'react'
import { Header } from '../../components/Header'
import { ActiveCoupons } from '../../components/layout/Dashboard/ActiveCoupons'
import { NewMission } from '../../components/layout/Dashboard/NewMission'
import { Container, ScrollableContainer } from './style'
import { MissionsInProgress } from '../../components/layout/Dashboard/MissionsInProgress'

export const Dashboard: React.FC = () => {
  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header title="Bem vindo usuário" />
        <ActiveCoupons />
        <NewMission />
        <MissionsInProgress />
      </Container>
    </ScrollableContainer>
  )
}
