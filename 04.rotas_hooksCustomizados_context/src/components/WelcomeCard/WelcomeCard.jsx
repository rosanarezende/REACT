import { WelcomeMessage, WelcomeMessage2, WelcomeMessage3 } from "../index";
import "./WelcomeCard.css";

// PROP DRILLING
export function WelcomeCard({ name }) {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      <WelcomeMessage name={name} />
    </div>
  );
}






// PROP
export function WelcomeCard2({ componenteDeFrase }) {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      {componenteDeFrase}
    </div>
  );
}

// CHILDREN
export function WelcomeCard3({ children }) {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      {children}
    </div>
  );
}

// CONTEXT
export function WelcomeCard4() {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      <WelcomeMessage2 />
    </div>
  );
}

export function WelcomeCard5() {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      <WelcomeMessage3 />
    </div>
  );
}
