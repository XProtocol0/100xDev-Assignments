import { useEffect } from 'react'

export function useInterval(fn, timeout) {
  useEffect(() => {
    const value = setInterval(() => {
      fn()
    }, timeout)

    return () => {
      clearInterval(value)
    }
  }, [timeout])
}