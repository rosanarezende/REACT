import { Text } from "components/atoms";
import {
  InputExample, InputExample1, InputExample2,
  FormExample, FormExample1, FormExample2, FormExample3,
  Counter, Counter1, Counter2, Counter3, Counter4,
  Fetch, Fetch1, Fetch2, Fetch3
} from "./examples";

export default function CustomHooks() {
  return (
    <section>
      <Text subtitle="Custom Hooks" />

      <Fetch3 />
    </section>
  );
}
