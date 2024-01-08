import { useEffect } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

Timer.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};
function Timer({ state, dispatch }) {
  const currentValue = new Date(state.secondsRemaining * 1000)
    .toISOString()
    .substring(14, 19);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return <div className={styles.timer}>{currentValue}</div>;
}

export default Timer;
