import styles from "./styles.module.css";
import Header from "../Header/Header";

function Splash({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Splash;
