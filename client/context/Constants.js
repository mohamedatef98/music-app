import { createContext } from 'react'

export const contextValue = {
  api: 'http://localhost:4000/graphql',
  host: 'http://localhost:4000',
  title: 'Musicify',
  theme: 'dark',
  toggleTheme: () => {}
}

export default createContext(contextValue)
