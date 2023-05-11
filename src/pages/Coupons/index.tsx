import React, { useEffect, useState } from 'react'
import { Container, List, ScrollableContainer } from './style'
import { Header } from '../../components/Header'
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'
import { DetailItem } from '../../components/layout/Coupons/DetailItem'
import CouponsApi from '../../services/CouponsApi'
import { useUser } from '../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'
import { ActivityIndicator, View } from 'react-native'
import { primary } from '../../styles/globalVar'

export const Coupons: React.FC = () => {
  const { userKey } = useUser()

  const [coupons, setCoupons] = useState<App.Coupom[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const isFocused = useIsFocused()

  useEffect(() => {
    CouponsApi.list(userKey)
      .then((res) => {
        setCoupons(res.data)
        console.log(res.data)
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
                award={c.award}
                id={c.id}
                img={c.img}
                validate={c.validate}
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
