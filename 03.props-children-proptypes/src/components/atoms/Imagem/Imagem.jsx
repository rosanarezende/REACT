import "./Imagem.css";

export default function Imagem({ imagemUrl, textoAlternativo, formato }) {
  return (
    <img
      className={`imagem ${formato}`}
      src={imagemUrl || "https://via.placeholder.com/150"}
      alt={textoAlternativo || "Imagem"}
    />
  );
}
