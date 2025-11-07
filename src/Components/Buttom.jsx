// Button.jsx
import styles from "./Button.module.css";

export default function Button({ children, disabled, ...props }) {
  return (
    <button
      className={`${styles.primary} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
