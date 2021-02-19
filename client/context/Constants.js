import { createContext } from 'react'

export const contextValue = {
  api: 'localhost:4000',
  title: 'Musicify',
  theme: 'dark',
  toggleTheme: () => {}
}

export default createContext(contextValue)
