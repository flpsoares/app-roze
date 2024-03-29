import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
  useEffect
} from 'react'
import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface PushNotificationContextData {
  expoPushToken: string | null
  setExpoPushToken: React.Dispatch<React.SetStateAction<string | null>>
  sendLocalNotification: (title: string, body: string) => void
  sendRemoteNotification: (title: string, body: string, token: string) => void
}

interface PushNotificationProviderProps {
  children: ReactNode
}

export const PushNotificationContext = createContext(
  {} as PushNotificationContextData
)

export const PushNotificationProvider = ({
  children
}: PushNotificationProviderProps) => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>('')

  const getToken = async () => {
    const token = await AsyncStorage.getItem('@ExpoPushToken')
    setExpoPushToken(token)
  }

  useEffect(() => {
    getToken()
  }, [])

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })

  const sendLocalNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { data: 'goes here' }
      },
      trigger: { seconds: 2 }
    })
  }

  const sendRemoteNotification = async (
    title: string,
    body: string,
    token: string
  ) => {
    const message = {
      to: token,
      sound: 'default',
      title,
      body
    }

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
  }

  return (
    <PushNotificationContext.Provider
      value={{
        expoPushToken,
        setExpoPushToken,
        sendLocalNotification,
        sendRemoteNotification
      }}
    >
      {children}
    </PushNotificationContext.Provider>
  )
}

export const usePushNotification = () => {
  return useContext(PushNotificationContext)
}
