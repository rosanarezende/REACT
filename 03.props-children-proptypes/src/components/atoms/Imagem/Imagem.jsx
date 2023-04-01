import React from "react";
import "./Imagem.css";

export default function Imagem({ imagemUrl, textoAlternativo, formato }) {
  return (
    <img
      className={`imagem ${formato}`}
      src={imagemUrl}
      alt={textoAlternativo}
    />
  );
}

// Apenas para fins exemplificativos, se o componente fosse escrito com classe ficaria assim:
export class Imagem2 extends React.Component {
  super(props) {
    this.props = props;
  }

  render() {
    const { imagemUrl, textoAlternativo, formato } = this.props;

    return (
      <img
        className={`imagem ${formato}`}
        src={imagemUrl}
        alt={textoAlternativo}
      />
    );
  }
}
