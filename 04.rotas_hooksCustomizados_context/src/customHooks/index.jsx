import { useEffect } from "react"
import { useState } from "react"

export const useCounter = (initialValue = 0, countValue = 1) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(count + countValue)
  const decrement = () => setCount(count - countValue)

  return { count, increment, decrement }
}

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const reset = () => setValue(initialValue)
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  }

  return [value, bind, reset]
}

export const useOposit = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const reset = () => setValue(initialValue)
  const bind = {
    value,
    onChange: () => setValue(!value),
  }

  return [value, bind, reset]
}

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    request()
  }, [])

  return { data, loading, error }
}

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const localValue = window.localStorage.getItem(key)
    return localValue !== null ? JSON.parse(localValue) : initialValue
  })

  const setLocalStorage = (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
    setState(newValue)
  }

  return [state, setLocalStorage]
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")
  const colorTheme = theme === "light" ? "dark" : "light"

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}
