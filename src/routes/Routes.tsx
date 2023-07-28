import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard } from '../pages/Dashboard'
import { background, primary } from '../styles/globalVar'
import { Missions } from '../pages/Missions'
import { Coupons } from '../pages/Coupons'
import { TabButton } from '../components/TabButton'
import { MissionDetail } from '../pages/MissionDetail'
import { MissionsStackRoutes } from './MissionsStackRoutes'
import { Support } from '../pages/Support'
import { NewMissions } from '../pages/NewMissions'
const Tab = createBottomTabNavigator()

export const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: {
          borderTopColor: 'transparent',
          borderTopWidth: 1,
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: background,
          height: 60
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: '#596988'
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Painel',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabButton name="view-grid-outline" isActive={focused} />
          )
        }}
      />
      <Tab.Screen
        name="MissionsStackRoutes"
        component={MissionsStackRoutes}
        options={{
          tabBarLabel: 'Missões',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabButton name="fire" isActive={focused} />
        }}
      />
      <Tab.Screen
        name="Coupons"
        component={Coupons}
        options={{
          tabBarLabel: 'Cupons',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabButton name="bookmark-minus-outline" isActive={focused} />
          )
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="Missions"
        component={Missions}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="NewMissions"
        component={NewMissions}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="MissionDetail"
        component={MissionDetail}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
    </Tab.Navigator>
  )
}
