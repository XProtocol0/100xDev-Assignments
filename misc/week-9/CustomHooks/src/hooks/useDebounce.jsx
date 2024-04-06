import {useEffect, useState} from 'react'

export function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, timeout)

    return () => {
      clearInterval(timer)
    }
  }, [value])

  return debouncedValue;
}