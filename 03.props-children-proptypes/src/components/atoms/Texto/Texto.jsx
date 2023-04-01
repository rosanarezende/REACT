import "./Texto.css";

export default function Texto({
  children,
  titulo,
  subtitulo,
  textoH3,
  textoH4,
  textoH5,
  textoH6,
  cor,
  corTitulo,
  corSubtitulo,
  corParagrafo,
  corH3,
  corH4,
  corH5,
  corH6,
}) {
  return (
    <div className="texto" style={{ color: cor }}>
      {titulo && <h1 style={{ color: corTitulo }}>{titulo}</h1>}
      {subtitulo && <h2 style={{ color: corSubtitulo }}>{subtitulo}</h2>}
      {textoH3 && <h3 style={{ color: corH3 }}>{textoH3}</h3>}
      {textoH4 && <h4 style={{ color: corH4 }}>{textoH4}</h4>}
      {textoH5 && <h5 style={{ color: corH5 }}>{textoH5}</h5>}
      {textoH6 && <h6 style={{ color: corH6 }}>{textoH6}</h6>}
      {children && <p style={{ color: corParagrafo }}>{children}</p>}
    </div>
  );
}

Texto.defaultProps = {
  corTitulo: "#ffffff",
  corH3: "#646cff",
};
