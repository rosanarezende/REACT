import { UserProvider } from "../../../contexts/user";
import { ThemeContext } from "../../../contexts/theme";
import { WelcomeCard4, WelcomeCard5 } from "../../molecules";

export function ContextAPI() {
  // Não teremos mais os dados do usuário aqui, mas sim no contexto
  // const user = { name: "Maria", email: "maria@email.com" };

  return (
    <section>
      <h2>Context API</h2>
      <p>
        Permite criar um contexto compartilhado que pode ser acessado por
        componentes em diferentes níveis da árvore de componentes, sem precisar
        passar props manualmente por cada nível intermediário
      </p>

      {/* Para usar o contexto o componente precisa ser "abraçado por um provider" */}
      <UserProvider>
        <WelcomeCard4 />
        <WelcomeCard5 />
      </UserProvider>

      {/* Como o tema é usado em toda a aplicação (header e também main) abraçamos a aplicação inteira */}
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <div className={`tema-${theme}`}>
            <div>
              <button onClick={() => setTheme("black")}>Escuro</button>
              <button onClick={() => setTheme("white")}>Claro</button>
            </div>
            <p>O tema escolhido é {theme}</p>
          </div>
        )}
      </ThemeContext.Consumer>
    </section>
  );
}
