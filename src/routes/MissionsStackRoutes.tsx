import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { MissionDetail } from '../pages/MissionDetail'
import { Missions } from '../pages/Missions'
import { NewMissions } from '../pages/NewMissions'

const Stack = createNativeStackNavigator()

export const MissionsStackRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Missions">
      <Stack.Screen
        name="Missions"
        component={Missions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewMissions"
        component={NewMissions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MissionDetail"
        component={MissionDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
