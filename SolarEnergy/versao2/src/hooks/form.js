import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const onChange = (event, checkbox) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: checkbox ? event.target.checked : value,
    });
  };

  const bindForm = (name, checkbox) => ({
    value: formValue[name],
    onChange: checkbox ? (event) => onChange(event, checkbox) : onChange,
  });

  const resetForm = () => setFormValue(initialValue);

  return [formValue, bindForm, resetForm];
};
