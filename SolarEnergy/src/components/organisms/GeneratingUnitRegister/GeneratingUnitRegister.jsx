import "./GeneratingUnitRegister.css";
import { useForm, useFetch } from "../../../hooks";
import { Button, Input } from "../../atoms";

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
    <section className="generating-unit-register">
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={handleSave}>
        <div>
          <label for="apelido">Apelido</label>
          <Input type="text" name="apelido" {...bindForm("apelido")} />
        </div>
        <div>
          <label for="local">Local</label>
          <Input type="text" name="local" {...bindForm("local")} />
        </div>

        <div>
          <label for="marca"> Marca </label>
          <Input type="text" name="marca" {...bindForm("marca")} />
        </div>

        <div>
          <label for="modelo"> Modelo </label>
          <Input type="text" name="modelo" {...bindForm("modelo")} />
        </div>
        <div className="checkbox">
          <input type="checkbox" name="ativa" {...bindForm("ativa", true)}
            defaultChecked={bindForm("ativa", true).value}
          />{" "}
          <label for="ativa">Ativo</label>
        </div>
        <Button classStyle="secondary" type="submit">
          Salvar
        </Button>
      </form>
    </section>
  );
}
