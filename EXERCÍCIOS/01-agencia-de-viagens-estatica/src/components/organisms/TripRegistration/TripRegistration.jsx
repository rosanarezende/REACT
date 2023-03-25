import "./TripRegistration.css";
import { Button, FormField, Text } from "../../atoms";

export default function TripRegistration() {
  return (
    <section className="trip-registration">
      <Text subtitulo="Formulário de cadastro de viagem" />

      <form>
        <div>
          <FormField label="Nome" type="text" name="name" />

          <FormField label="País" type="text" name="country" />
        </div>

        <FormField textarea label="Descrição" type="text" name="description" />

        <div>
          <FormField label="Preço" type="number" name="price" />

          <FormField label="Duração (em dias)" type="number" name="duration" />

          <FormField label="Data" type="date" name="date" />
        </div>

        <div>
          <FormField label="Link da imagem" type="text" name="image" />

          <FormField label="Link de detalhes" type="text" name="link" />
        </div>

        <Button primary type="submit">Cadastrar</Button>
      </form>
    </section>
  );
}
