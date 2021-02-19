import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import Link from 'next/link'

const Navbar = () => {
  const classes = useStyles()
  return <nav className={classes.navContainer}>
    <AppBar position='static'>
      <Toolbar>
          <Typography variant='h4'>
            <Link href='/'>
              News
            </Link>
          </Typography>
          {/* <Button color='inherit'>Login</Button> */}
      </Toolbar>
    </AppBar>
  </nav>
}

const useStyles = makeStyles(theme => ({
  title: {
    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
}))

export default Navbar
