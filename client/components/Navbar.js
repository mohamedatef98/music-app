import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Switch } from '@material-ui/core'
import Link from 'next/link'
import Constants from '../context/Constants'
import DarkModeToggler from './DarkModeToggler'

const Navbar = () => {
  const classes = useStyles()
  const { title } = useContext(Constants)
  return <nav className={classes.navContainer}>
    <AppBar position='static'>
      <Toolbar classes={{ root: classes.nav }}>
        <Typography variant='h4' classes={{ root: classes.title }}>
          <Link href='/'>
            {title}
          </Link>
        </Typography>
        <DarkModeToggler />
      </Toolbar>
    </AppBar>
  </nav>
}

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
}))

export default Navbar
