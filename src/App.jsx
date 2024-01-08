import "./index.css";
import { useEffect, useReducer } from "react";

import Questions from "./components/Questions/Questions";
import Splash from "./components/Splash/Splash";
import Loader from "./components/ui/Loader";
import ErrorElement from "./components/ui/ErrorElement";
import Result from "./components/Result/Result";
import Main from "./components/Main/Main";

const initialState = {
  questions: [],
  currentQuestion: -1,
  status: "ready",
  score: 0,
  highScore: 0,
  answer: -1,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return { ...state, status: "loading" };
    }
    case "error": {
      return { ...state, status: "error" };
    }
    case "setquestions": {
      return {
        ...initialState,
        questions: action.payload,
        status: "ready",
      };
    }
    case "restart": {
      return { ...state, status: "ready", currentQuestion: -1 };
    }
    case "start": {
      return { ...state, currentQuestion: 0 };
    }
    case "answer": {
      const correctAnswer = state.questions.at(
        state.currentQuestion
      ).correctOption;
      const score =
        action.payload === correctAnswer
          ? state.questions.at(state.currentQuestion).points
          : 0;
      return { ...state, answer: action.payload, score: state.score + score };
    }
    case "next": {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: -1,
      };
    }
    case "finish": {
      return {
        ...state,
        status: "finished",
        currentQuestion: -1,
        highScore:
          state.score > state.highScore ? state.score : state.highScore,
      };
    }
  }
  return state;
}

// https://my-json-server.typicode.com/mohannadaly/questionsjson/questions
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const maxScore = state.questions.reduce((a, c) => a + c.points, 0);

  useEffect(() => {
    async function getQuestions() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(
          "https://my-json-server.typicode.com/mohannadaly/questionsjson/questions"
        );
        if (!res.ok) throw new Error("Couldn't fetch data");
        const data = await res.json();
        dispatch({ type: "setquestions", payload: data });
      } catch (err) {
        dispatch({ type: "error" });
        console.log(err.message);
      }
    }
    getQuestions();
  }, [dispatch]);

  return (
    <div className="app">
      <Splash>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <ErrorElement />}
        {state.currentQuestion === -1 && state.status === "ready" && (
          <Main
            numQuestions={state.questions?.length || 0}
            dispatch={dispatch}
          />
        )}
        {state.currentQuestion > -1 && (
          <Questions state={state} dispatch={dispatch} />
        )}
        {state.status === "finished" && (
          <Result
            userScore={state.score}
            maxScore={maxScore}
            highScore={state.highScore}
            dispatch={dispatch}
          />
        )}
      </Splash>
    </div>
  );
}

export default App;
