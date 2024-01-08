import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./styles.module.css";

Options.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  styles: PropTypes.object,
};

function Options({ state, dispatch }) {
  const currentQuestion = state.questions[state.currentQuestion];
  return (
    <>
      {currentQuestion.options.map((option, i) => (
        <Button
          key={option}
          isUIButton={false}
          isDisabled={state.answer !== -1}
          onClick={() => {
            dispatch({ type: "answer", payload: i });
          }}
          classes={`${styles.btnOption} ${
            i === state.answer ? styles.answer : ""
          } ${
            state.answer !== -1
              ? i === currentQuestion.correctOption
                ? styles.correct
                : styles.wrong
              : ""
          }`}
        >
          {option}
        </Button>
      ))}
    </>
  );
}

export default Options;
