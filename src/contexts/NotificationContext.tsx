import React, { createContext, useContext, ReactNode, useState } from 'react'
import NotificationsApi from '../services/NotificationsApi'

interface NotificationContextData {
  notifications: App.Notification[]
  makeUpdateNotifications: () => void
  listNotifications: (userKey: string) => void
  updateNotifications: boolean
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationContext = createContext({} as NotificationContextData)

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<App.Notification[]>([])

  const [updateNotifications, setUpdateNotifications] = useState(false)

  const makeUpdateNotifications = () => {
    setUpdateNotifications(!updateNotifications)
  }

  const listNotifications = (userKey: string) => {
    NotificationsApi.list(userKey).then((res) => {
      setNotifications(res.data)
    })
  }

  return (
    <NotificationContext.Provider
      value={{
        listNotifications,
        makeUpdateNotifications,
        updateNotifications,
        notifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}
