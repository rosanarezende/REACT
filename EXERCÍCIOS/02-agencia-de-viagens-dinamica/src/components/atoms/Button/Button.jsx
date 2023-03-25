import "./Button.css";

export default function Button({ children, danger, primary, secondary }) {
  const style = danger
    ? "danger"
    : primary
    ? "primary"
    : secondary
    ? "secondary"
    : "";

  return <button className={`button ${style}`}>{children}</button>;
}
