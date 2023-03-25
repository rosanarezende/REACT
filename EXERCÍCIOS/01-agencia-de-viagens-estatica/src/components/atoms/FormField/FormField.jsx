import "./FormField.css";

export default function FormField({ id, label, type, name, value, onChange, textarea }) {
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="form-field" key={id || name}>
      <label htmlFor={name}>{label}</label>
      <Tag
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
