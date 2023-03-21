import { Cabecalho } from "./components/molecules";
import {
  Componentes,
  RenderizacaoCondicional,
  RenderizacaoDeListas,
} from "./components/organisms";

export default function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Componentes />
        <RenderizacaoDeListas />
        <RenderizacaoCondicional />
      </main>
    </>
  );
}
