import { useCallback, useEffect, useState } from 'react'
import Constants, { contextValue as defaultContextValue } from '../context/Constants'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const changeTheme = useCallback(theme => {
    setContextValue(contextValue => ({ ...contextValue, theme }))
  }, [])

  const [contextValue, setContextValue] = useState({ ...defaultContextValue, changeTheme })

  useEffect(() => {
    document.body.setAttribute('data-theme', contextValue.theme)
  }, [contextValue.theme])

  return (
    <Constants.Provider value={contextValue}>
      <Component {...pageProps} />
    </Constants.Provider>
  )
}

export default MyApp
