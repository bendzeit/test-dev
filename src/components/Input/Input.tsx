import type { HTMLInputTypeAttribute } from "react";
import { useState } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  clearable: boolean;
  onChange: (value: string) => void;
  type: HTMLInputTypeAttribute;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "type"
>;

function Input({
  label,
  placeholder,
  value,
  onChange,
  clearable,
  type,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const getInputClass = () => {
    const hasPasswordToggle = isPassword;
    const hasClearButton = clearable && value;

    if (hasPasswordToggle && hasClearButton) {
      return `${styles.input} ${styles.inputWithTwoButtons}`;
    } else if (hasPasswordToggle || hasClearButton) {
      return `${styles.input} ${styles.inputWithButton}`;
    }
    return styles.input;
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={getInputClass()}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.button}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className={`${styles.button} ${
              isPassword ? styles.clearButton : ""
            }`}
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
