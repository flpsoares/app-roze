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
import { MissionDetail } from '../pages/MissionDetail'
import { Missions } from '../pages/Missions'
import { NewMissions } from '../pages/NewMissions'

const Drawer = createDrawerNavigator()

export const DrawerRoutes: React.FC = () => {
  const { setUserKey } = useUser()

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
    </Drawer.Navigator>
  )
}
