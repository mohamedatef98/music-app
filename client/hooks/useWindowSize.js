import { useEffect, useState } from 'react'

export default function useWindowSize() {
  const [width, setWidth] = useState(this?.innerWidth)
  const [height, setHeight] = useState(this?.innerHeight)

  useEffect(() => {
    function resizeListener() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  return { width, height }
}
