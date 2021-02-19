import { createMuiTheme, CssBaseline, MuiThemeProvider, useMediaQuery } from '@material-ui/core'
import { useCallback, useEffect, useState, useMemo } from 'react'
import Constants, { contextValue as defaultContextValue } from '../context/Constants'
import themeConfig from '../theme'

function MyApp({ Component, pageProps }) {
  const toggleTheme = useCallback(() => {
    setContextValue(contextValue => ({
      ...contextValue,
      theme: contextValue.theme == 'light' ? 'dark' : 'light'
    }))
  }, [])

  const [contextValue, setContextValue] = useState({ ...defaultContextValue, toggleTheme })

  useEffect(() => {
    const { matches: prefersDark } = matchMedia('(prefers-color-scheme: dark)')
    if (prefersDark) setContextValue(ctx => ({ ...ctx, theme: 'dark' }))
  }, [])

  const theme = useMemo(() => {
    return createMuiTheme({
      palette: {
        type: contextValue.theme
      }
    }, themeConfig)
  }, [contextValue.theme])

  return (
    <Constants.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Constants.Provider>
  )
}

export default MyApp
