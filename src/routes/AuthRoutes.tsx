import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useRef, useState } from 'react'
import { ForgotPassword } from '../pages/Auth/ForgotPassword'
import { Login } from '../pages/Auth/Login'
import { Register } from '../pages/Auth/Register'
import { Welcome } from '../pages/Auth/Welcome'
import { background, primary } from '../styles/globalVar'
import { DrawerRoutes } from './DrawerRoutes'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useUser } from '../contexts/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthApi from '../services/AuthApi'
import { ActivityIndicator, View, Alert, Platform } from 'react-native'
import { CustomDrawer } from '../components/CustomDrawer'
import { Routes } from './Routes'
import { MissionsStackRoutes } from './MissionsStackRoutes'
import { Support } from '../pages/Support'
import { NewMissions } from '../pages/NewMissions'
import { MissionDetail } from '../pages/MissionDetail'
import { useNotification } from '../contexts/NotificationContext'
import { usePushNotification } from '../contexts/PushNotificationsContext'
import NotificationsApi from '../services/NotificationsApi'

import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export const AuthRoutes: React.FC = () => {
  const { setUserKey, setHasUser, hasUser, setUser, userKey } = useUser()
  const { listNotifications, updateNotifications } = useNotification()

  const { setExpoPushToken } = usePushNotification()

  const [notification, setNotification] = useState<any>(false)
  const notificationListener = useRef(null)
  const responseListener = useRef(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function exec() {
      const storedKey = await AsyncStorage.getItem('key')
      if (storedKey !== null) {
        AuthApi.checkToken(storedKey)
          .then((res) => {
            setUserKey(storedKey)
            console.log(storedKey)
            setHasUser(true)
            setUser(res.data)
          })
          .catch((e) => {
            console.log(e.response.data.error)
            setHasUser(false)
            setUserKey('')
          })
      } else {
        setHasUser(false)
        setUserKey('')
      }
    }

    exec().finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (userKey) {
      listNotifications(userKey)
    }
  }, [updateNotifications, userKey])

  useEffect(() => {
    if (hasUser) {
      registerForPushNotificationsAsync()
        .then(async (token) => {
          if (userKey) {
            setExpoPushToken(token)
            NotificationsApi.setPushToken(userKey, token)
          }
        })
        .catch((error) => {
          Alert.alert('Aviso', error)
        })

      if (notificationListener) {
        notificationListener.current = Notifications.addNotificationReceivedListener(
          (notification) => {
            setNotification(notification)
          }
        )
      }

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          // console.log(response)
        })

      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current)
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [hasUser, userKey])

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
      alert('Must use physical device for Push Notifications')
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

  if (!isLoading && hasUser === true) {
    return (
      <Drawer.Navigator
        screenOptions={{ drawerPosition: 'right', headerShown: false }}
        drawerContent={() => <CustomDrawer />}
      >
        <Drawer.Screen name="DashboardDrawer" component={Routes} />
        <Drawer.Screen name="NewMissions" component={NewMissions} />
        <Drawer.Screen name="MissionDetail" component={MissionDetail} />
        <Drawer.Screen name="MissionsDrawer" component={MissionsStackRoutes} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    )
  }

  if (!isLoading && hasUser === false) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerStyle: { backgroundColor: background },
            headerTintColor: primary
          }}
        />
      </Stack.Navigator>
    )
  }
}
