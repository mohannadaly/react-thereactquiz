import PropTypes from "prop-types";
import Button from "../Button/Button";

Options.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  styles: PropTypes.object,
};

function Options({ state, dispatch, styles }) {
  const currentQuestion = state.questions[state.currentQuestion];
  return (
    <>
      {currentQuestion.options.map((option, i) => (
        <Button
          key={option}
          isOption={true}
          isDisabled={state.answer !== -1}
          onClick={() => {
            dispatch({ type: "answer", payload: i });
          }}
          classes={`${i === state.answer ? styles.answer : ""} ${
            state.answer !== -1 && i === currentQuestion.correctOption
              ? styles.correct
              : styles.wrong
          }`}
        >
          {option}
        </Button>
      ))}
    </>
  );
}

export default Options;
