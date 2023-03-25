import "./FormField.css";

export default function FormField({ id, label, type, name, value, onChange, textArea }) {
  const Tag = textArea ? "textarea" : "input";
  const checked = type === "checkbox" ? !!value : undefined;

  return (
    <div className={`form-field ${type}`} key={id || name}>
      <label htmlFor={name}>{label}</label>
      <Tag
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
}
