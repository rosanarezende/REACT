import { useState } from "react";

// Com base em tudo que foi feitos nos hooks de input, podemos criar um hook customizado bem completo para formulárop

export const useForm = (initialValue = {}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const resetForm = () => setFormValue(initialValue);

  return [formValue, onChange, resetForm];
};

export const useForm2 = (initialValue = {}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const bindForm = (name) => ({
    value: formValue[name],
    onChange,
  });

  const resetForm = () => setFormValue(initialValue);

  return [formValue, bindForm, resetForm];
}
