import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Alert, Platform, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from '../components/CustomDrawer'

import { Routes } from './Routes'
import { Support } from '../pages/Support'
import { MissionsStackRoutes } from './MissionsStackRoutes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthApi from '../services/AuthApi'
import { useUser } from '../contexts/AuthContext'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { usePushNotification } from '../contexts/PushNotificationsContext'
import NotificationsApi from '../services/NotificationsApi'

const Drawer = createDrawerNavigator()

export const DrawerRoutes: React.FC = () => {
  const { setUserKey, userKey } = useUser()
  const { setExpoPushToken } = usePushNotification()

  const [notification, setNotification] = useState<any>(false)
  const notificationListener = useRef(null)
  const responseListener = useRef(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function exec() {
      const storedKey = await AsyncStorage.getItem('key')
      if (storedKey !== null) {
        AuthApi.checkToken(storedKey)
          .then((res) => {
            setUserKey(storedKey)
          })
          .catch((e) => {
            console.log(e.response.data.error)
          })
      }
    }

    exec().finally(() => {
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(async (token) => {
        if (userKey) {
          setExpoPushToken(token)
          NotificationsApi.setPushToken(userKey, token)
        }
      })
      .catch((error) => {
        console.log(error)
        Alert.alert('Aviso', error)
      })

    if (notificationListener) {
      notificationListener.current = Notifications.addNotificationReceivedListener(
        (notification) => {
          setNotification(notification)
        }
      )
    }

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // console.log(response)
      }
    )

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  async function registerForPushNotificationsAsync() {
    let token
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
    } else {
      // alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      })
    }

    return token
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
      drawerContent={() => <CustomDrawer />}
    >
      <Drawer.Screen name="DashboardDrawer" component={Routes} />
      <Drawer.Screen name="MissionsDrawer" component={MissionsStackRoutes} />
      {/* <Routes /> */}
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  )
}
