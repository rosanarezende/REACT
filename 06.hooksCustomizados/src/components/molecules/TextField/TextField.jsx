import { useState } from "react";
import "./TextField.css";

export default function TextField({
  type,
  value,
  onChange,
  label,
  placeholder,
  helperText,
  required,
  textarea,
  select,
  tagStyle,
}) {
  const Tag = textarea ? "textarea" : select ? "select" : "input";

  const [isFocused, setIsFocused] = useState(!!select);
  const [isFilled, setIsFilled] = useState(!!select);

  const hasLabel = isFocused || isFilled || placeholder;
  const innerLabelStyle = hasLabel
    ? {}
    : { transform: "translateY(1rem) scale(1) translateX(0.75rem)" };

  return (
    <div className="textfield">
      <label className="textfield__label" style={innerLabelStyle}>
        {label}
      </label>
      <div className="textfield__wrapper">
        <Tag
          className="textfield__input"
          style={tagStyle}
          required={required}
          type={type || "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          cols={30}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            setIsFilled(select ? true : value?.length > 0);
          }}
        >
          {select &&
            select.map((option) => (
              <option
                key={option.id}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
        </Tag>
        <fieldset className="textfield__fieldset">
          <legend
            className="textfield__legend"
            style={{ display: !!select || hasLabel ? "block" : "none" }}
          >
            {label && <span>{label}</span>}
          </legend>
        </fieldset>
      </div>
      {helperText && (
        <p
          className="textfield__helper-text"
          style={{ display: isFocused ? "block" : "none" }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
