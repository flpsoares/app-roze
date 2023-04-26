import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from '../components/CustomDrawer'

import { Routes } from './Routes'
import { Support } from '../pages/Support'
import { Missions } from '../pages/Missions'
import { MissionsStackRoutes } from './MissionsStackRoutes'

const Drawer = createDrawerNavigator()

export const DrawerRoutes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

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
