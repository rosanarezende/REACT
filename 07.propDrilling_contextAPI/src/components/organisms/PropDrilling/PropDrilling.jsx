import { WelcomeCard } from "../../molecules";

export function PropDrilling() {
  const user = {
    name: "Maria",
    email: "maria@email.com",
  };

  return (
    <section>
      <h2>Prop Drilling</h2>

      <WelcomeCard name={user.name}/>
    </section>
  );
}
