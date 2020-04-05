const initialState = {
  currentQuestion: 0,
  progress: 0,
  turn: 3,
  second: 100,
  correct: false,
  answered: false,
  numberOfQuestion: 4,
  passExam: false
};

const exams = (state = initialState, action) => {
  switch (action.type) {
    case "START_EXAM":
      return {
        ...state,
        currentQuestion: 0,
        process: 0,
        second: 100
      };
    case "NEXT_QUESTION":
      if (state.currentQuestion + 1 === state.numberOfQuestion) {
        return {
          ...state,
          passExam: !state.passExam
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        correct: false,
        answered: false
      };
    case "ANSWER_IS_TRUE":
      return {
        ...state,
        correct: true,
        progress: state.progress + Math.ceil((1 / numberOfQuestion) * 100)
      };

    case "ANSWER_IS_FALSE":
      return {
        ...state,
        answered: true,
        correct: false
      };
    default:
      return state;
  }
};

export default exams;
