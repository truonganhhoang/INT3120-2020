const initialState = {
  currentQuestion: 0,
  progress: 0,
  turn: 3,
  second: 0,
  numberOfQuestion: 0,
  passExam: false,
  failed: false,
  loading: false,
};

const exams = (state = initialState, action) => {
  switch (action.type) {
    case "START_EXAM":
      return {
        ...initialState,
        currentQuestion: 0,
        second: action.time,
        numberOfQuestion: action.totalQuestions,
      };

    case "REFRESH_EXAM":
      return state;

    case "IS_LOADING_EXAM":
      if (action.loading) return { ...state, loading: true };
      return { ...state, loading: false };

    case "ANSWER_IS_TRUE":
      if (state.currentQuestion + 1 === state.numberOfQuestion) {
        return {
          ...state,
          progress: 100,
          passExam: !state.passExam,
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        progress:
          state.progress + Math.ceil((1 / state.numberOfQuestion) * 100),
      };

    case "ANSWER_IS_FALSE":
      if (state.turn - 1 === 0) {
        return {
          ...state,
          turn: state.turn - 1,
          failed: !state.failed,
        };
      }
      return {
        ...state,
        turn: state.turn - 1,
      };
    case "TICK":
      if (state.second !== 0 && !state.failed) {
        return {
          ...state,
          second: state.second - 1,
        };
      }
      //second = 0
      return {
        ...state,
        failed: !state.failed,
      };
    default:
      return state;
  }
};

export default exams;
