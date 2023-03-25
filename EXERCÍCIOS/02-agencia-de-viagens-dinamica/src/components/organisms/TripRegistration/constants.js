export const formItens = [
  { label: "Nome", type: "text", name: "name" },
  { label: "País", type: "text", name: "country" },
  { label: "Descrição", type: "text", name: "description", textArea: true },
  { label: "Preço", type: "number", name: "price" },
  { label: "Duração", type: "number", name: "duration" },
  { label: "Data", type: "date", name: "date" },
  { label: "Disponível", type: "checkbox", name: "available" },
  { label: "Imagem", type: "text", name: "image" },
  { label: "Link", type: "text", name: "link" },
];

export const emptyTrip = {
  name: "",
  country: "",
  description: "",
  price: 0,
  duration: 0,
  date: "",
  image: "",
  link: "",
  available: false,
};
