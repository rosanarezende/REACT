import { useState } from 'react'

export const useInput1 = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => setValue(e.target.value)

  return [value, onChange]
}


export const useInput2 = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  }

  const reset = () => setValue(initialValue)

  return [value, bind, reset]
}
