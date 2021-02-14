import { useContext } from 'react'
import Layout from '../components/Layout'
import Constants from '../context/Constants'
import styles from '../styles/Home.module.css'

export default function Home() {
  const ctx = useContext(Constants)
  console.log(ctx)
  return (
    <Layout>
      <section>
        <h2 onClick={() => ctx.changeTheme('light')}>Artists</h2>
      </section>
    </Layout>
  )
}
