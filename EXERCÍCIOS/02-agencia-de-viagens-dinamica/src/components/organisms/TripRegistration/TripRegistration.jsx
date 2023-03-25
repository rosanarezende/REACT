import "./TripRegistration.css";
import { useState } from "react";
import { Button, FormField, Text } from "../../atoms";

import { emptyTrip, formItens } from "./constants"

export default function TripRegistration() {
  const [trip, setTrip] = useState(emptyTrip);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTrip = {
      id: Math.floor(Math.random() * 9000) + 1000,
      ...trip,
    }

    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    trips.push(newTrip);
    localStorage.setItem("trips", JSON.stringify(trips));

    setTrip(emptyTrip);
  };


  const handleChange = (event, item, trip) => {
    const { name, value } = event.target;

    if (item.type === "checkbox") {
      setTrip({ ...trip, [name]: !trip[name] });
    } else {
      setTrip({ ...trip, [name]: value });
    }
  }


  return (
    <section className="trip-registration">
      <Text subtitulo="Formulário de cadastro de viagem" />

      <form onSubmit={handleSubmit}>
        {formItens.map((item) => (
          <FormField
            key={item.name}
            textArea={item.textArea}
            label={item.label}
            type={item.type}
            name={item.name}
            value={trip[item.name]}
            onChange={(event) => handleChange(event, item, trip)}
          />
        ))}

        <Button primary type="submit">
          Cadastrar
        </Button>
      </form>
    </section>
  );
}
