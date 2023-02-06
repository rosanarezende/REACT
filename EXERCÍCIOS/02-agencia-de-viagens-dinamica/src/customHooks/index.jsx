import { useState } from "react"

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const reset = () => setValue(initialValue)
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  }

  return [value, bind, reset]
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
