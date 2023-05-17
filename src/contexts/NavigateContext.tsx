import { useNavigation, DrawerActions } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { createContext, ReactNode, useContext } from 'react'
import { RootStackParamsList } from '../routes/RootStackParamsList'

type LoginScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Login'>
type RegisterScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Register'>
type DrawerScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Drawer'>
type MissionsStackRoutesScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  'MissionsStackRoutes'
>
type NewMissionsScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  'NewMissions'
>
type CouponsScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Coupons'>
type ForgotPasswordScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  'ForgotPassword'
>
type MissionDetailScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  'MissionDetail'
>
type SupportScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Support'>

interface NavigateContextData {
  navigateToLogin: () => void
  navigateToRegister: () => void
  navigateToMissionDetail: (id: number, id_camp: number) => void
  navigateToCoupons: () => void
  navigateToMissionsStackRoutes: () => void
  navigateToNewMissions: () => void
  navigateToForgotPassword: () => void
  navigateToSupport: () => void
  navigateToDrawer: () => void
  openDrawerMenu: () => void
}

interface NavigateProviderProps {
  children: ReactNode
}

export const NavigateContext = createContext({} as NavigateContextData)

export const NavigateProvider = ({ children }: NavigateProviderProps) => {
  const navigationLogin = useNavigation<LoginScreenProps>()
  const navigationRegister = useNavigation<RegisterScreenProps>()
  const navigationNewMissions = useNavigation<NewMissionsScreenProps>()
  const navigationForgotPassword = useNavigation<ForgotPasswordScreenProps>()
  const navigationMissionDetail = useNavigation<MissionDetailScreenProps>()
  const navigationCoupons = useNavigation<CouponsScreenProps>()
  const navigationSupport = useNavigation<SupportScreenProps>()
  const navigationDrawer = useNavigation<DrawerScreenProps>()
  const navigationMissionsStackRoutes =
    useNavigation<MissionsStackRoutesScreenProps>()
  const navigation = useNavigation()

  const navigateToLogin = () => {
    navigationLogin.navigate('Login')
  }
  const navigateToRegister = () => {
    navigationRegister.navigate('Register')
  }
  const navigateToNewMissions = () => {
    navigationNewMissions.navigate('NewMissions')
  }
  const navigateToForgotPassword = () => {
    navigationForgotPassword.navigate('ForgotPassword')
  }

  const navigateToMissionDetail = (id: number, id_camp: number) => {
    navigationMissionDetail.navigate('MissionDetail', { id, id_camp })
  }

  const navigateToCoupons = () => {
    navigationCoupons.navigate('Coupons')
  }

  const navigateToDrawer = () => {
    navigationDrawer.navigate('Drawer')
  }

  const navigateToSupport = () => {
    navigationSupport.navigate('Support')
  }

  const navigateToMissionsStackRoutes = () => {
    navigationMissionsStackRoutes.navigate('MissionsStackRoutes')
  }

  const openDrawerMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <NavigateContext.Provider
      value={{
        navigateToForgotPassword,
        navigateToLogin,
        navigateToMissionDetail,
        navigateToRegister,
        openDrawerMenu,
        navigateToNewMissions,
        navigateToMissionsStackRoutes,
        navigateToSupport,
        navigateToCoupons,
        navigateToDrawer
      }}
    >
      {children}
    </NavigateContext.Provider>
  )
}

export const useNavigate = () => {
  return useContext(NavigateContext)
}
