import React, { useContext } from 'react'
import Head from 'next/head'
import Constants from '../context/Constants'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core'

export default function Layout({ children }) {
  const { title } = useContext(Constants)
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main className={classes.mainContainer}>
          {children}
        </main>
      </div>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    [theme.breakpoints.up('ml')]: {
      maxWidth: `${theme.breakpoints.values.ml}px`,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
}))
