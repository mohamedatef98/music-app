import { createMuiTheme, CssBaseline, MuiThemeProvider, useMediaQuery } from '@material-ui/core'
import Head from 'next/head'
import { useCallback, useEffect, useState, useMemo } from 'react'
import Constants, { contextValue as defaultContextValue } from '../context/Constants'
import themeConfig from '../theme'

import 'swiper/swiper.min.css'

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
      ...themeConfig,
      palette: {
        ...themeConfig.palette,
        type: contextValue.theme
      }
    })
  }, [contextValue.theme])

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <Constants.Provider value={contextValue}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Constants.Provider>
    </>
  )
}

export default MyApp
