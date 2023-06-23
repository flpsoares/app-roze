import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ActiveCoupons } from '../../components/layout/Dashboard/ActiveCoupons'
import { NewMission } from '../../components/layout/Dashboard/NewMission'
import { Container, ScrollableContainer } from './style'
import { MissionsInProgress } from '../../components/layout/Dashboard/MissionsInProgress'
import CouponsApi from '../../services/CouponsApi'
import { useUser } from '../../contexts/AuthContext'
import { useIsFocused } from '@react-navigation/native'
import { ActivityIndicator, View } from 'react-native'
import { primary } from '../../styles/globalVar'
import { usePushNotification } from '../../contexts/PushNotificationsContext'

export const Dashboard: React.FC = () => {
  const { userKey, user } = useUser()
  const { expoPushToken } = usePushNotification()

  const [coupons, setCoupons] = useState<App.Coupom[]>([])
  const isFocused = useIsFocused()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (userKey) {
      CouponsApi.list(userKey)
        .then((res) => {
          setCoupons(res.data)
        })
        .finally(() => setIsLoading(false))
    }
  }, [userKey, isFocused])

  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Header title={`Bem vindo ${user?.name}`} />
        <Header title={expoPushToken} />
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={primary} size="large" />
          </View>
        ) : (
          <>{coupons.length > 0 && <ActiveCoupons quantity={coupons.length} />}</>
        )}

        <NewMission />
        <MissionsInProgress />
      </Container>
    </ScrollableContainer>
  )
}
