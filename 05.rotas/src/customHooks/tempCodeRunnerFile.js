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