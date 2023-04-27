import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import * as Updates from 'expo-updates'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TouchableOpacity, View, Text } from 'react-native'
import { NavigateProvider } from './src/contexts/NavigateContext'
import { AuthRoutes } from './src/routes/AuthRoutes'
import { Routes } from './src/routes/Routes'
import { Login } from './src/pages/Auth/Login'
import { DrawerRoutes } from './src/routes/DrawerRoutes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthApi from './src/services/AuthApi'
import { UserProvider, useUser } from './src/contexts/AuthContext'

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

  return (
    <NavigationContainer>
      <UserProvider>
        <NavigateProvider>
          <AuthRoutes />
          <StatusBar style="light" backgroundColor="#131313" />
        </NavigateProvider>
      </UserProvider>
    </NavigationContainer>
  )
}
