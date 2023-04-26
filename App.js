import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import * as Updates from 'expo-updates'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigateProvider } from './src/contexts/NavigateContext'
// import { UserProvider } from './src/contexts/UserContext'
import { AuthRoutes } from './src/routes/AuthRoutes'
import { Routes } from './src/routes/Routes'
import { Login } from './src/pages/Auth/Login'
import { DrawerRoutes } from './src/routes/DrawerRoutes'
import { AuthProvider, useAuth } from './src/contexts/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const { setHasUser, hasUser, verifyIsHasUser } = useAuth()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const exec = async () => {
      await verifyIsHasUser()
      setHasUser((await AsyncStorage.getItem('key')) !== null)
    }

    exec().finally(() => {
      setIsLoading(false)
    })
  }, [])

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

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <NavigateProvider>
          {/* {hasUser ? <DrawerRoutes /> : <AuthRoutes />} */}
          <AuthRoutes />
          <StatusBar style="light" backgroundColor="#131313" />
        </NavigateProvider>
      </NavigationContainer>
    </AuthProvider>
  )
}
