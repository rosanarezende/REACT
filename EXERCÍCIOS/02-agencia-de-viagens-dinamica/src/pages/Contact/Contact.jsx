import { useState } from "react";
import {
  useInput,
  useInputAdvanced,
  useForm,
  useFormAdvanced,
} from "../../customHooks";

// ESSE COMPONENTE É O CORRETO PARA A APLICAÇÃO - TEM OUTROS ABAIXO PARA FINS EXEMPLIFICATIVOS
export function Contact() {
  return (
    <form onSubmit={handleSubmit}>
      <h3>CADASTRE-SE</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="passemailword">Email</label>
        <input
          id="email"
          type="email"
          aria-label="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
        />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
        />
      </div>
      <button>Enviar</button>
    </form>
  )
}

// SEM USAR HOOK CUSTOMIZADO
export function Contact1() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Nome: ${form.name} \nEmail: ${form.email} \nTelefone: ${form.phone} \nMensagem: ${form.message}`
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário SEM USAR HOOK</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={setForm}
          name="name"
        />
      </div>
      <div>
        <label htmlFor="passemailword">Email</label>
        <input
          id="email"
          type="email"
          aria-label="email"
          value={form.email}
          onChange={setForm}
          name="email"
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={setForm}
          name="phone"
        />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          value={form.message}
          onChange={setForm}
          name="message"
        />
      </div>
      <button>Enviar</button>
    </form>
  );
}

// HOOK CUSTOMIZADO DE INPUT SIMPLES - useInput
export function Contact2() {
  const [name, setName] = useInput();
  const [email, setEmail] = useInput();
  const [phone, setPhone] = useInput();
  const [message, setMessage] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Nome: ${name} \nEmail: ${email} \nTelefone: ${phone} \nMensagem: ${message}`
    );

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário com useInput</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" value={name} onChange={setName} />
      </div>
      <div>
        <label htmlFor="passemailword">Email</label>
        <input
          id="email"
          type="email"
          aria-label="email"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone</label>
        <input id="phone" type="tel" value={phone} onChange={setPhone} />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" value={message} onChange={setMessage} />
      </div>
      <button>Enviar</button>
    </form>
  );
}

// HOOK CUSTOMIZADO DE INPUT AVANÇADO - useInputAdvanced
export function Contact3() {
  const [name, bindName, resetName] = useInputAdvanced();
  const [email, bindEmail, resetEmail] = useInputAdvanced();
  const [phone, bindPhone, resetPhone] = useInputAdvanced();
  const [message, bindMessage, resetMessage] = useInputAdvanced();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Nome: ${name} \nEmail: ${email} \nTelefone: ${phone} \nMensagem: ${message}`
    );

    resetName();
    resetEmail();
    resetPhone();
    resetMessage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário com useInputAdvanced</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" {...bindName} />
      </div>
      <div>
        <label htmlFor="passemailword">Email</label>
        <input id="email" type="email" aria-label="email" {...bindEmail} />
      </div>
      <div>
        <label htmlFor="phone">Telefone</label>
        <input id="phone" type="tel" {...bindPhone} />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" {...bindMessage} />
      </div>
      <button>Enviar</button>
    </form>
  );
}

// HOOK CUSTOMIZADO DE FORMULÁRIO SIMPLES - useForm
export function Contact4() {
  const [formulario, alteraOValorDoInput] = useForm({
    nome: "",
    email: "",
  });

  return (
    <form>
      <h3>Formulário com useForm</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="nome"
          value={formulario.nome}
          onChange={alteraOValorDoInput}
        />
      </div>nome
      <div>
        <label htmlFor="passemailword">Email</label>
        <input
          id="email"
          type="email"
          aria-label="email"
          name="email"
          value={formulario.email}
          onChange={alteraOValorDoInput}
        />
      </div>
    </form>
  );
}

// HOOK CUSTOMIZADO DE FORMULÁRIO AVANÇADO - useFormAdvanced
export function Contact5() {
  const [form, bindForm, resetForm] = useFormAdvanced({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Nome: ${form.name} \nEmail: ${form.email} \nTelefone: ${form.phone} \nMensagem: ${form.message}`
    );

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário com useFormAdvanced</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" {...bindForm} name="name" />
      </div>
      <div>
        <label htmlFor="passemailword">Email</label>
        <input
          id="email"
          type="email"
          aria-label="email"
          {...bindForm}
          name="email"
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone</label>
        <input id="phone" type="tel" {...bindForm} name="phone" />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" {...bindForm} name="message" />
      </div>
      <button>Enviar</button>
    </form>
  );
}
