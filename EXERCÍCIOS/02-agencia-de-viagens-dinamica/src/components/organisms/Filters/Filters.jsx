import { useEffect, useState } from "react";
import "./Filters.css";
import { Text, Button, FormField } from "../../atoms";

export default function Filters({ filters, setFilters }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const tripList = JSON.parse(localStorage.getItem("trips")) || [];
    const countries = tripList.map((trip) => trip.country);
    const uniqueCountries = [...new Set(countries)];

    setCountries(uniqueCountries);
  }, []);

  return (
    <section className="filters">
      <Text subtitulo="Filtros" />

      <div className="fields">
        <FormField
          type="checkbox"
          name="available"
          label="Viagens disponíveis"
          value={filters.available}
          onChange={(event) =>
            setFilters({ ...filters, available: event.target.checked })
          }
        />

        {/* <div className="country">
          <label htmlFor="country">País</label>
          <select
            name="country"
            id="country"
            value={filters.country}
            onChange={(event) =>
              setFilters({ ...filters, country: event.target.value })
            }
          >
            <option value="">Todos</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div> */}
        <FormField
          select={countries}
          name="country"
          label="País"
          value={filters.country}
          onChange={(event) =>
            setFilters({ ...filters, country: event.target.value })
          }
        />

        {/* <div className="price"> */}
        <FormField
          type="number"
          name="minPrice"
          label="Preço mínimo"
          value={filters.minPrice}
          onChange={(event) =>
            setFilters({ ...filters, minPrice: event.target.value })
          }
        />

        <FormField
          type="number"
          name="maxPrice"
          label="Preço máximo"
          value={filters.maxPrice}
          onChange={(event) =>
            setFilters({ ...filters, maxPrice: event.target.value })
          }
        />
        {/* </div> */}
      </div>

      <Button
        secondary
        handleClick={() =>
          setFilters({
            available: "",
            country: "",
            minPrice: 0,
            maxPrice: 0,
          })
        }
      >
        Limpar filtros
      </Button>
    </section>
  );
}
