import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import { NavigateProvider } from './src/contexts/NavigateContext'
import { AuthRoutes } from './src/routes/AuthRoutes'
import { UserProvider } from './src/contexts/AuthContext'
import { NotificationProvider } from './src/contexts/NotificationContext'
import { PushNotificationProvider } from './src/contexts/PushNotificationsContext'
import { ListProvider } from './src/contexts/ListContext'

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <NavigateProvider>
          <NotificationProvider>
            <ListProvider>
              <PushNotificationProvider>
                <AuthRoutes />
                <StatusBar style="light" backgroundColor="#131313" />
              </PushNotificationProvider>
            </ListProvider>
          </NotificationProvider>
        </NavigateProvider>
      </UserProvider>
    </NavigationContainer>
  )
}
