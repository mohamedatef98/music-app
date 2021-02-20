import { makeStyles, Typography, Grid, Fab } from '@material-ui/core'
import React, { useRef, useCallback, useState } from 'react'
import Card from './Card'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { readPxs, writePxs } from '../utils/styles'

export default function Carousel({
  title = '',
  data = []
}) {
  const classes = useStyles()
  const gridRootRef = useRef(null)
  const containerRef = useRef(null)
  const [noLeft, setNoLeft] = useState(true)
  const [noRight, setNoRight] = useState(false)

  const handleRightClick = useCallback(() => {
    if (gridRootRef.current && containerRef.current) {
      const grid = gridRootRef.current
      const container = containerRef.current
      const { width: gridWidth } = grid.getBoundingClientRect()
      const { width: containerWidth } = container.getBoundingClientRect()
      const currentleftValue = readPxs(grid, 'left')
      const { width: childWidth } = grid.children[0].getBoundingClientRect()
      const toBeSubtractedLeft = Math.floor(containerWidth / childWidth) * childWidth
      writePxs(grid, 'left', currentleftValue - toBeSubtractedLeft)
      setNoLeft(false)
      if (currentleftValue - toBeSubtractedLeft - containerWidth <= -gridWidth) setNoRight(true)
    }
  }, [gridRootRef.current, containerRef.current])

  const handleLeftClick = useCallback(() => {
    if (gridRootRef.current) {
      const grid = gridRootRef.current
      const container = containerRef.current
      const { width: gridWidth } = grid.getBoundingClientRect()
      const { width: containerWidth } = container.getBoundingClientRect()
      const currentleftValue = readPxs(grid, 'left')
      const { width: childWidth } = grid.children[0].getBoundingClientRect()
      const toBeAddedLeft = Math.floor(containerWidth / childWidth) * childWidth
      writePxs(grid, 'left', currentleftValue + toBeAddedLeft)
      setNoRight(false)
      if (currentleftValue + toBeAddedLeft >= 0) setNoLeft(true)
    }
  }, [gridRootRef.current, containerRef.current])

  return <section>
    {
      title && (
        <Typography variant='h5' color='textPrimary' classes={{ root: classes.heading }}>
          {title}
        </Typography>
      )
    }
    <div className={classes.carouselContainer}>
      {
        noLeft == false && (
          <Fab classes={{ root: classes.leftButton }} color='secondary' size='small' onClick={handleLeftClick}>
            <ChevronLeftIcon />
          </Fab>
        )
      }
      <div className={classes.gridContainer} ref={containerRef}>
        <Grid container
          spacing={2}
          wrap='nowrap'
          justify='flex-start'
          classes={{ root: classes.gridRoot }}
          ref={gridRootRef}
        >
          {data.map((item) => <Grid
            key={item.key}
            item
          >
            <Card
              alt={item.alt}
              href={item.href}
              src={item.src}
              text={item.text}
            />
          </Grid>)}
        </Grid>
      </div>
      {
        noRight == false && (
          <Fab classes={{ root: classes.rightButton }} color='secondary' size='small' onClick={handleRightClick}>
            <ChevronRightIcon />
          </Fab>
        )
      }
    </div>
  </section >
}

const useStyles = makeStyles(theme => ({
  heading: {
    textTransform: 'uppercase',
    marginBottom: '1rem'
  },
  carouselContainer: {
    position: 'relative'
  },
  gridContainer: {
    width: '100%',
    overflow: 'hidden'
  },
  gridRoot: {
    width: 'fit-content',
    position: 'relative',
    left: 0,
    transition: 'left 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  leftButton: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    zIndex: 20
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%) translateX(50%)',
    zIndex: 20
  }
}))
