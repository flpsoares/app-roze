import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import * as Updates from 'expo-updates'
import React, { useEffect, useRef, useState } from 'react'
import { NavigateProvider } from './src/contexts/NavigateContext'
import { AuthRoutes } from './src/routes/AuthRoutes'
import { UserProvider } from './src/contexts/AuthContext'
import { NotificationProvider } from './src/contexts/NotificationContext'
import { PushNotificationProvider } from './src/contexts/PushNotificationsContext'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { Platform } from 'react-native'

export default function App() {
  useEffect(() => {
    const updateApp = async () => {
      const { isAvailable } = await Updates.checkForUpdateAsync()

      if (isAvailable) {
        await Updates.fetchUpdateAsync()

        await Updates.reloadAsync()
      }
    }

    updateApp()
  }, [])

  // async function registerForPushNotificationsAsync() {
  //   let token
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync()
  //     let finalStatus = existingStatus
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync()
  //       finalStatus = status
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!')
  //       return
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data
  //   } else {
  //     // alert('Must use physical device for Push Notifications')
  //   }

  //   if (Platform.OS === 'android') {
  //     Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C'
  //     })
  //   }

  //   return token
  // }

  return (
    <NavigationContainer>
      <UserProvider>
        <NavigateProvider>
          <NotificationProvider>
            {/* <PushNotificationProvider> */}
            <AuthRoutes />
            <StatusBar style="light" backgroundColor="#131313" />
            {/* </PushNotificationProvider> */}
          </NotificationProvider>
        </NavigateProvider>
      </UserProvider>
    </NavigationContainer>
  )
}
