import "./MonthlyGenerationRegister.css"
import { useNavigate } from "react-router-dom";
import { Standard } from "../../components/templates";
import { useFetch, useForm } from ".././../hooks";
import { Button, Input } from "../../components/atoms";

export default function MonthlyGenerationRegister() {
  const navigate = useNavigate();
  const { data: units } = useFetch(`http://localhost:3003/unidades`);
  const { postData } = useFetch(`http://localhost:3003/geracoes`);

  const [formValue, bindForm, resetForm] = useForm({
    unidade: undefined,
    data: undefined,
    total: 0,
  });

  const handleSave = (event) => {
    const value = {
      ...formValue,
      total: Number(formValue.total),
    };

    event.preventDefault();
    postData("http://localhost:3003/geracoes", value).then(() => {
      resetForm();
      navigate("/dashboard");
    });
  };

  return (
    <Standard title="Lançamento de geração mensal">
        <form onSubmit={handleSave} className="monthly-generation-register">
          <div>
            <label htmlFor="unidade">Unidade geradora:</label>
            <select id="unidade" name="unidade" {...bindForm("unidade")}>
              <option value="">Selecione uma unidade</option>
              {units?.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.apelido}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="data">Mês/ano:</label>
            <Input type="month" id="data" name="data" {...bindForm("data")} />
          </div>

          <div>
            <label htmlFor="total">Total kw gerado:</label>
            <Input
              type="number"
              id="total"
              name="total"
              {...bindForm("total")}
            />
          </div>
          <Button classStyle="secondary" type="submit">Cadastrar</Button>
        </form>
    </Standard>
  );
}
