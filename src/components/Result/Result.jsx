import Button from "../Button/Button";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function getResultIcon(result) {
  if (result >= 90) return "😁";
  if (result >= 80) return "😃";
  if (result >= 60) return "🤔";
  if (result >= 40) return "🤦‍♂️";
  return "😭";
}

Result.propTypes = {
  userScore: PropTypes.number,
  maxScore: PropTypes.number,
  highScore: PropTypes.number,
  dispatch: PropTypes.func,
};

function Result({ userScore, maxScore, highScore, dispatch }) {
  const percentage = (userScore / maxScore) * 100;
  return (
    <>
      <p className={styles.result}>
        {getResultIcon(percentage)} You scored <strong>{userScore}</strong> out
        of {maxScore} ({Math.ceil(percentage)}%)
      </p>
      <p className={styles.highscore}>(Highscore: {highScore} points)</p>
      <Button onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </Button>
    </>
  );
}

export default Result;
