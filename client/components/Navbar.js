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
        <div className={classes.iconContainer}>
          <img src='/icon.png' alt='Musicify icon' className={classes.icon} />
          <Typography variant='h5' classes={{ root: classes.title }}>
            <Link href='/'>
              {title}
            </Link>
          </Typography>
        </div>
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
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    height: '56px',
    width: '56px',
    backgroundImage: 'radial-gradient(#6d166680, #00000000)',
    borderRadius: '50%',
    marginRight: '10px'
  }
}))

export default Navbar
