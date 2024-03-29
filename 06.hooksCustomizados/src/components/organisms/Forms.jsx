import { useState } from "react";
import { useForm, useForm2 } from "hooks";

// sem custom hook
export const FormExample = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form.name, form.email);
    setForm({
      name: "",
      email: "",
    });
  };

  return (
    <section>
      <h3>Form sem custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};


// com custom hook
export const FormExample1 = () => {
  const [form, onChange, resetForm] = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <section>
      <h3>Form com custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={onChange} />
        <input type="email" name="email" value={form.email} onChange={onChange} />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

// com custom hook e maps
const inputs = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
]
export const FormExample2 = () => {
  const [form, onchange, resetForm] = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <section>
      <h3>Form com custom hook + maps</h3>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          const { name, type } = input;
          return <input key={name} name={name} type={type} value={form[name]} onChange={onchange} />;
        })}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

// simplificando com bind
export const FormExample3 = () => {
  const [form, bindForm, resetForm] = useForm2({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <section>
      <h3>Form com custom hook + maps + bind</h3>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          const { name, type } = input;
          return <input key={name} name={name} type={type} {...bindForm(name)} />;
        })}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
