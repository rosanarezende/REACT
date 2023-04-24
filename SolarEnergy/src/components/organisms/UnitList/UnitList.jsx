import "./UnitList.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";
import { useFetch } from "../../../hooks";

export default function UnitList({ setOpenUnitRegister, setUnitSelected }) {
  const { data: units, deleteData } = useFetch(
    "http://localhost:3003/unidades"
  );
  const navigate = useNavigate();

  const handleRemove = (id) => {
    deleteData(`http://localhost:3003/unidades/${id}`);
  };

  const handleEdit = (unit) => {
    setUnitSelected(unit)
    setOpenUnitRegister(true);
  };

  return (
    <section className="unit-list">
      <h2>Lista de Unidades</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {units?.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>{unit.apelido}</td>
              <td>{unit.local}</td>
              <td>{unit.marca}</td>
              <td>{unit.modelo}</td>
              <td>
                <Button
                  classStyle="green"
                  onClick={() => {
                    handleEdit(unit);
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button
                  classStyle="danger"
                  onClick={() => {
                    handleRemove(unit.id);
                  }}
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        classStyle="secondary"
        onClick={() => setOpenUnitRegister(true)}
        style={{
          alignSelf: "flex-end",
          marginTop: "50px",
        }}
      >
        Nova unidade
      </Button>
    </section>
  );
}
