import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

interface UserContextData {
  hasUser: boolean
  userKey: string
  setUserKey: React.Dispatch<React.SetStateAction<string>>
  setHasUser: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userKey, setUserKey] = useState('')
  const [hasUser, setHasUser] = useState<boolean>()

  return (
    <UserContext.Provider
      value={{
        hasUser,
        setHasUser,
        setUserKey,
        userKey
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}
