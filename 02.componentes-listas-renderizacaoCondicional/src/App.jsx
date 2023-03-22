import { Cabecalho } from "./components/molecules";
import {
  RenderizacaoDeComponentes,
  RenderizacaoCondicional,
  RenderizacaoDeListas,
} from "./components/organisms";

export default function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <RenderizacaoDeComponentes />
        <RenderizacaoDeListas />
        <RenderizacaoCondicional />
      </main>
    </>
  );
}
