import React, { createContext, useContext, ReactNode, useState } from 'react'

interface ListContextData {
  updateMissions: boolean
  redoMissions: () => void
}

interface ListProviderProps {
  children: ReactNode
}

export const ListContext = createContext({} as ListContextData)

export const ListProvider = ({ children }: ListProviderProps) => {
  const [updateMissions, setUpdateMissions] = useState(false)

  const redoMissions = () => {
    setUpdateMissions(!updateMissions)
  }

  return (
    <ListContext.Provider value={{ updateMissions, redoMissions }}>
      {children}
    </ListContext.Provider>
  )
}

export const useList = () => {
  return useContext(ListContext)
}
