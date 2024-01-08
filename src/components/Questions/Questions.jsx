import styles from "./styles.module.css";
import PropTypes from "prop-types";

import Header from "./Header";
import Options from "./Options";
import Footer from "./Footer";

Questions.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};
function Questions({ state, dispatch }) {
  const currentQuestion = state.questions[state.currentQuestion].question;
  return (
    <>
      <Header state={state} />
      <div>
        <h4>{currentQuestion}</h4>
        <div className={styles.options}>
          <Options state={state} dispatch={dispatch} styles={styles} />
        </div>
      </div>
      <Footer state={state} dispatch={dispatch} />
    </>
  );
}

export default Questions;
