import styles from "./styles.module.css";
function Button({ children, onClick, isUIButton = true, classes, isDisabled }) {
  return (
    <button
      className={`${styles.btn} ${isUIButton ? styles.btnUI : ""} ${classes}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
