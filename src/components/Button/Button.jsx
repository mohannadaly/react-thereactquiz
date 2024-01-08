import styles from "./styles.module.css";
function Button({ children, onClick, isOption, classes, isDisabled }) {
  return (
    <button
      className={`${styles.btn} ${
        isOption ? styles.btnOption : styles.btnUI
      } ${classes}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
