import React, { Fragment } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Link from 'next/link'

export default function Card({ src, alt, text, variant = 'h6', href = '' }) {
  const classes = useStyles()
  return <Link href={href}>
    <a className={classes.link}>
      <div className={classes.imgOverlay}>
        <div></div>
        <img
          src={src}
          alt={alt}
        />
      </div>
      <Typography variant={variant} color='textSecondary'>
        {text}
      </Typography>
    </a>
  </Link>
}

const useStyles = makeStyles(theme => ({
  link: {
    display: 'block',
    textDecoration: 'none'
  },
  imgOverlay: {
    width: '190px',
    height: '190px',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0),rgba(0,0,0,0))',
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '3px 3px 3px 0px rgba(0,0,0,0.25)',
    '& div': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 10,
      opacity: 0,
      backgroundColor: '#000',
      transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        opacity: 0.2
      }
    },
    '& img': {
      width: '100%'
    }
  }
}))
