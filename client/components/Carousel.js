import { makeStyles, Typography, Grid, Fab } from '@material-ui/core'
import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'
import Card from './Card'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Swiper, SwiperSlide } from 'swiper/react'
import useWindowSize from '../hooks/useWindowSize'

export default function Carousel({
  title = '',
  data = []
}) {
  const classes = useStyles()
  const { width: windowWidth } = useWindowSize()
  const gridContainerRef = useRef(null)
  const [numberOfSlide, setNumberOfSlides] = useState(0)
  const swiperRef = useRef(null)

  useLayoutEffect(() => {
    const containerWidth = gridContainerRef.current.getBoundingClientRect().width
    const cardWidth = 220
    const numberOfAllSlides = Number(containerWidth / cardWidth).toFixed(1)
    setNumberOfSlides(numberOfAllSlides)
  }, [windowWidth, gridContainerRef.current])

  const handleRightClick = useCallback(() => {
    const swiper = swiperRef.current.swiper
    swiper.slideNext()
  }, [swiperRef.current])

  const handleLeftClick = useCallback(() => {
    const swiper = swiperRef.current.swiper
    swiper.slidePrev()
  }, [swiperRef.current])

  return <section>
    {
      title && (
        <Typography variant='h5' color='textPrimary' classes={{ root: classes.heading }}>
          {title}
        </Typography>
      )
    }
    <div className={classes.carouselContainer}>
      <Fab classes={{ root: classes.leftButton }} color='secondary' size='small' onClick={handleLeftClick}>
        <ChevronLeftIcon />
      </Fab>

      <div className={classes.gridContainer} ref={gridContainerRef}>
        <Swiper slidesPerView={numberOfSlide} ref={swiperRef}>
          {data.map((item) => <SwiperSlide key={item.key}>
            <Card
              alt={item.alt}
              href={item.href}
              src={item.src}
              text={item.text}
            />
          </SwiperSlide>)}
        </Swiper>
      </div>

      <Fab classes={{ root: classes.rightButton }} color='secondary' size='small' onClick={handleRightClick}>
        <ChevronRightIcon />
      </Fab>
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
    transform: 'translateY(-50%) translateX(-30%)',
    zIndex: 20
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%) translateX(30%)',
    zIndex: 20
  }
}))
