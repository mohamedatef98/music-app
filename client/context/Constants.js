import { createContext } from 'react'

export const contextValue = {
  api: 'localhost:4000',
  title: 'Musicify',
  theme: 'dark',
  changeTheme: (theme) => theme
}

export default createContext(contextValue)
