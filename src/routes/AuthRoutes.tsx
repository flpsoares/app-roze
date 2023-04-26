import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ForgotPassword } from '../pages/Auth/ForgotPassword'
import { Login } from '../pages/Auth/Login'
import { Register } from '../pages/Auth/Register'
import { Welcome } from '../pages/Auth/Welcome'
import { background, primary } from '../styles/globalVar'
import { DrawerRoutes } from './DrawerRoutes'

const Stack = createNativeStackNavigator()

export const AuthRoutes: React.FC = () => {
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
        name="Drawer"
        component={DrawerRoutes}
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
