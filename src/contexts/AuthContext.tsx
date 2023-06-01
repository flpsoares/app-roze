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
  user: UserProps | undefined
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

interface UserProviderProps {
  children: ReactNode
}

interface UserProps {
  email: string
  img: string
  name: string
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userKey, setUserKey] = useState('')
  const [hasUser, setHasUser] = useState<boolean>()

  const [user, setUser] = useState<UserProps>()

  return (
    <UserContext.Provider
      value={{
        hasUser,
        setHasUser,
        setUserKey,
        userKey,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}
