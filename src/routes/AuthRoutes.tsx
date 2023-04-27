import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
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
import { ActivityIndicator, View } from 'react-native'
import { CustomDrawer } from '../components/CustomDrawer'
import { Routes } from './Routes'
import { MissionsStackRoutes } from './MissionsStackRoutes'
import { Support } from '../pages/Support'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export const AuthRoutes: React.FC = () => {
  const { setUserKey, setHasUser, hasUser } = useUser()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function exec() {
      const storedKey = await AsyncStorage.getItem('key')
      if (storedKey !== null) {
        AuthApi.checkToken(storedKey)
          .then((res) => {
            setUserKey(storedKey)
            setHasUser(true)
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

  if (isLoading) {
    console.log('isLoading')
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!isLoading && hasUser === true) {
    console.log('hasUser true')
    return (
      <Drawer.Navigator
        screenOptions={{ drawerPosition: 'right', headerShown: false }}
        drawerContent={() => <CustomDrawer />}
      >
        <Drawer.Screen name="DashboardDrawer" component={Routes} />
        <Drawer.Screen name="MissionsDrawer" component={MissionsStackRoutes} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    )
  }

  if (!isLoading && hasUser === false) {
    console.log('hasUser false')
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
