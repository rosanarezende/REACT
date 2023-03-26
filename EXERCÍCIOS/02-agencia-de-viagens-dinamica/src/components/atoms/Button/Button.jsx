import "./Button.css";

export default function Button({ children, danger, primary, secondary, success, handleClick }) {
  const style = danger
    ? "danger"
    : primary
    ? "primary"
    : secondary
    ? "secondary"
    : success
    ? "success"
    : "";

  return <button className={`button ${style}`} onClick={handleClick}>{children}</button>;
}
