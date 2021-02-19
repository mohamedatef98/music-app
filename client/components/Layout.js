import React, { useContext } from 'react'
import Head from 'next/head'
import Constants from '../context/Constants'
import Navbar from './Navbar'

export default function Layout({ children }) {
  const { title } = useContext(Constants)
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
