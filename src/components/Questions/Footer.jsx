import PropTypes from "prop-types";
import Button from "../Button/Button";
import Timer from "./Timer";

Footer.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};
function Footer({ state, dispatch }) {
  const isLastQuestion = state.currentQuestion === state.questions.length - 1;
  return (
    <footer>
      <Timer state={state} dispatch={dispatch} />
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
