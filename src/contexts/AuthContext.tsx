import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthContextData {
  hasUser: boolean | undefined
  userKey: string
  setUserKey: React.Dispatch<React.SetStateAction<string>>
  setHasUser: React.Dispatch<React.SetStateAction<boolean>>
  verifyIsHasUser: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userKey, setUserKey] = useState('')
  const [hasUser, setHasUser] = useState<boolean>()

  const verifyIsHasUser = async () => {
    const key = await AsyncStorage.getItem('key')

    if (key !== null) {
      setUserKey(key)
      setHasUser(true)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        hasUser,
        setHasUser,
        setUserKey,
        userKey,
        verifyIsHasUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
