import { makeStyles } from '@material-ui/core'
import { useContext } from 'react'
import Layout from '../components/Layout'
import Constants from '../context/Constants'

export default function Home() {
  const ctx = useContext(Constants)

  return (
    <Layout>
      <section>
        <h2>Artists</h2>
      </section>
    </Layout>
  )
}

const useStyles = makeStyles(theme => ({

}))
