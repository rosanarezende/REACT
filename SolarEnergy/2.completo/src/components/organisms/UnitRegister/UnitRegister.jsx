import "./UnitRegister.css";
import { useForm, useFetch } from "../../../hooks";
import { Button, Input } from "../../atoms";

export default function UnitRegister({ unitSelected, setOpenUnitRegister }) {
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

  const formItens = [
    { label: "Apelido", name: "apelido" },
    { label: "Local", name: "local" },
    { label: "Marca", name: "marca" },
    { label: "Modelo", name: "modelo" },
  ];

  return (
    <section className="generating-unit-register">
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={handleSave}>
        {formItens.map((item) => (
          <div key={item.name}>
            <label for={item.name}>{item.label}</label>
            <Input
              type="text"
              name={item.name}
              id={item.name}
              {...bindForm(item.name)}
            />
          </div>
        ))}

        <div className="checkbox">
          <input
            type="checkbox"
            name="ativa"
            id="ativa"
            {...bindForm("ativa", true)}
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
