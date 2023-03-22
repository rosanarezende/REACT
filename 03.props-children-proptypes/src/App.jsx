import { Cabecalho } from './components/molecules'
import { Props, Children, PropTypes, ValoresPadrao } from './components/organisms'

export default function App() {

  return (
    <>
      <Cabecalho />

      <main>
        <Props />
        <Children />
        <PropTypes />
        <ValoresPadrao />
      </main>
    </>
  )
}
