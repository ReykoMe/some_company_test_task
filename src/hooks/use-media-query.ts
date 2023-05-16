import {  useLayoutEffect, useState } from "react"

export const screenSizes = {
  sm: '57.6rem',
  md: '76.8rem'
}

export type MediaQuerySizes = keyof typeof screenSizes

const getMediaQueryString = (value: MediaQuerySizes | number) => {
  const valueString = typeof value === 'string' ? screenSizes[value] : `${value / 10}rem`
  return `(max-width: ${valueString})`
}

export function useMediaQuery(size: MediaQuerySizes | number): boolean {
  const [matched, setMatched] = useState<boolean>(false)

  useLayoutEffect(() => { 
    const checkWindowMedia = () => {
      const { matches } = matchMedia(getMediaQueryString(size))
      setMatched(matches)
     }

    window.addEventListener('load', checkWindowMedia)
    window.addEventListener('resize', checkWindowMedia) 
  }, [])

  return matched
 }