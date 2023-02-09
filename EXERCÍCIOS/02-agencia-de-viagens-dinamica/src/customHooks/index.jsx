import { useState } from "react"

// HOOK CUSTOMIZADO DE INPUT SIMPLES
export const useInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

// HOOK CUSTOMIZADO DE INPUT AVANÇADO
export const useInputAdvanced = (initialValue = "") => {
  const [value, setValue] = useState(initialValue)

  const reset = () => setValue(initialValue)
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  }

  return [value, bind, reset]
}

// HOOK CUSTOMIZADO DE FORMULÁRIO SIMPLES
export const useForm = (initialFormValue) => {
  const [value, setFormValue] = useState(initialFormValue);

  const onChangeFormValue = (e) => {
    setFormValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return [value, onChangeFormValue];
}

// Hook para localStorage
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
