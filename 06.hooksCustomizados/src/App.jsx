import "./App.css";
import { Text } from "components/atoms";
import { Header } from "./components/molecules";
import {
  InputExample, InputExample1, InputExample2,
  FormExample, FormExample1, FormExample2, FormExample3,
  Counter, Counter1, Counter2, Counter3, Counter4,
  Fetch, Fetch1, Fetch2, Fetch3
} from "./components/organisms";

function App() {
  return (
    <>
      <Header />

      <main>
        <Text subtitle="Custom Hooks" />

        <Fetch3 />
      </main>
    </>
  );
}

export default App;
