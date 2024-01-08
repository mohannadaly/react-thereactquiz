import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Button from "../Button/Button";

Footer.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};
function Footer({ state, dispatch }) {
  const isLastQuestion = state.currentQuestion === state.questions.length - 1;
  return (
    <footer>
      <div className={styles.timer}>00:00</div>
      <Button
        onClick={() => {
          dispatch({ type: isLastQuestion ? "finish" : "next" });
        }}
      >
        {isLastQuestion ? "Finish" : "Next"}
      </Button>
    </footer>
  );
}

export default Footer;
