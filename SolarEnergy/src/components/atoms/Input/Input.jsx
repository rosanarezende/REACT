import './Input.css';

export default function Input({
  icon,
  iconAlt,
  ...props
}) {
  return (
    <div className="input-container">
      {icon}
      <input
        className={`input ${icon ? "input-with-icon" : ""}`}
        {...props}
      />
    </div>
  );
}
