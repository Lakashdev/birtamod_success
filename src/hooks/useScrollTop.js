import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}
