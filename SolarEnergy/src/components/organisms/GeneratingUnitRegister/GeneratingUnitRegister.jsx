import { useForm, useFetch } from "../../../hooks";

export default function GeneratingUnitRegister({
  unitSelected,
  setOpenUnitRegister,
}) {
  const { postData, putData } = useFetch(`http://localhost:3003/unidades`);

  const initialState = unitSelected || {
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativa: false,
  };

  const [formValue, bindForm, resetForm] = useForm(initialState);

  const handleSave = (event) => {
    event.preventDefault();
    (unitSelected
      ? putData(`http://localhost:3003/unidades/${unitSelected.id}`, formValue)
      : postData("http://localhost:3003/unidades", formValue)
    ).then(() => {
      resetForm();
      setOpenUnitRegister(false);
    });
  };

  return (
    <section>
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={handleSave}>
        <label>
          Apelido
          <input type="text" name="apelido" {...bindForm("apelido")} />
        </label>
        <label>
          Local
          <input type="text" name="local" {...bindForm("local")} />
        </label>
        <label>
          Marca
          <input type="text" name="marca" {...bindForm("marca")} />
        </label>
        <label>
          Modelo
          <input type="text" name="modelo" {...bindForm("modelo")} />
        </label>
        <label>
          Ativa
          <input type="checkbox" name="ativa" {...bindForm("ativa", true)} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </section>
  );
}
