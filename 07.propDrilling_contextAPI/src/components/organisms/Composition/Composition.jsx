import { WelcomeCard2, WelcomeCard3, WelcomeMessage } from "../../molecules";

export function Composition() {
  const user = {
    name: "Maria",
    email: "maria@email.com",
  };

  return (
    <section>
      <h2>Composition</h2>

      <h3>Podemos usar PROPS para enviar o componente</h3>
      <WelcomeCard2
        componenteDeFrase={<WelcomeMessage name={user.name} />}
      />

      <h3>Podemos usar CHILDREN para enviar o componente</h3>
      <WelcomeCard3 >
        <WelcomeMessage name={user.name} />
      </WelcomeCard3>
    </section>
  );
}
