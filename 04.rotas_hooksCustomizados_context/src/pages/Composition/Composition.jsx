import {
  WelcomeCard,
  WelcomeCard2,
  WelcomeCard3,
  WelcomeCard4,
  WelcomeMessage,
} from "../../components";
import { WelcomeCard5 } from "../../components/WelcomeCard/WelcomeCard";
import { UserProvider } from "../../contexts/user";

export default function Composition() {
  const name = "Maria";

  return (
    <>
      {/* tem prop drilling */}
      <WelcomeCard name={name} />

      {/* Para evitar prop drilling */}

      {/* 1- Usar prop para passar o componente */}
      <WelcomeCard2
        message={<WelcomeMessage name={name} />}
      />

      {/* 2 - Usar children */}
      <WelcomeCard3>
        <WelcomeMessage name={name} />
      </WelcomeCard3>

      {/* 3 - Usar context */}
      <UserProvider>

        <WelcomeCard4 />
        <WelcomeCard5 />
        
      </UserProvider>
    </>
  );
}
