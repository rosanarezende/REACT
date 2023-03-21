import { Cabecalho } from "./components/molecules";
import {
  ReaproveitamentoDeComponentes,
  RenderizacaoCondicional,
  RenderizacaoDeListas,
} from "./components/organisms";

export default function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <ReaproveitamentoDeComponentes />
        <RenderizacaoDeListas />
        <RenderizacaoCondicional />
      </main>
    </>
  );
}
