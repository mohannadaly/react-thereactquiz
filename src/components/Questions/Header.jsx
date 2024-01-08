import styles from "./styles.module.css";
import PropTypes from "prop-types";

Header.propTypes = {
  state: PropTypes.object,
};
function Header({ state }) {
  const totalScore = state.questions.reduce((a, c) => a + c.points, 0);
  return (
    <header className={styles.progress}>
      <progress
        max={state.questions.length}
        value={state.currentQuestion + Number(state.answer !== -1)}
      />
      <p>
        Question <strong>{state.currentQuestion + 1}</strong> /{" "}
        {state.questions.length}
      </p>
      <p>
        <strong>{state.score}</strong> / {totalScore}
      </p>
    </header>
  );
}

export default Header;
