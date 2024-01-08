import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Button from "../Button/Button";
Main.propTypes = {
  numQuestions: PropTypes.number,
  dispatch: PropTypes.func,
};

function Main({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <Button onClick={() => dispatch({ type: "start" })}>
        {`Let's start`}
      </Button>
    </div>
  );
}

export default Main;
