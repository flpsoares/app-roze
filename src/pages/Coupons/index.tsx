import React, { useEffect, useState } from 'react'
import { Container, List, ScrollableContainer } from './style'
import { Header } from '../../components/Header'
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'
import { DetailItem } from '../../components/layout/Coupons/DetailItem'
import CouponsApi from '../../services/CouponsApi'
import { useUser } from '../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'

export const Coupons: React.FC = () => {
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
        <Header title="Meus Cupons" />
        <List>
          {coupons.map((c, index) => {
            return (
              <DetailItem
                key={index}
                code={c.code}
                id={c.id}
                img={c.img}
                name={c.name}
                status={c.status}
                store={c.store}
              />
            )
          })}
        </List>
      </Container>
    </ScrollableContainer>
  )
}
