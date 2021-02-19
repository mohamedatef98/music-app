import React, { useContext } from 'react'
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Constants from '../context/Constants'
import { IconButton } from '@material-ui/core'

export default function DarkModeToggler() {
  const { theme, toggleTheme } = useContext(Constants)

  return <IconButton aria-label={`Toggle ${theme} theme`} onClick={toggleTheme}>
    {
      theme == 'dark' ?
        <BrightnessLowIcon /> :
        <BrightnessHighIcon />
    }
  </IconButton>
}
