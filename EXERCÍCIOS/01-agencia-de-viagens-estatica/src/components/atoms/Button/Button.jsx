import './Button.css';

export default function Button({ danger, children }) {

  return (
    <button className={danger ? "danger" : "default"}>
      {children}
    </button>
  );
}
