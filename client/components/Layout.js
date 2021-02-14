import React, { useContext } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Constants from '../context/Constants'

export default function Layout({ children }) {
  const { title } = useContext(Constants)
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main style={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}
