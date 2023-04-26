import React, { useState } from 'react'
import { Container, List, ScrollableContainer } from './style'
import { Header } from '../../components/Header'
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'
import { DetailItem } from '../../components/layout/Coupons/DetailItem'

export const Coupons: React.FC = () => {
  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header title="Meus Cupons" />
        <List>
          <DetailItem />
          <DetailItem />
          <DetailItem />
          <DetailItem />
        </List>
      </Container>
    </ScrollableContainer>
  )
}
