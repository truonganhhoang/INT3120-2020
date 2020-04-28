import { createExamData } from "../utils/ExamDataService";

const defaultDataExam = [];

const dataExam = (state = defaultDataExam, action) => {
  if (action.type === "REFRESH_EXAM") {
    state = [];
    return state;
  }

  if (action.type === "CREATE_EXAM") {
    state = action.dataQuestions;
    return state;
  }

  if (action.type === "PICK_ONE_CHOICE") {
    return state.map((e) => {
      if (e.id !== action.id) return e;
      else {
        let newOpt = e.options.map((el, index) => {
          if (index === action.indexChoice) {
            return { ...el, isPressed: true };
          }
          return el;
        });
        let newE = { ...e, options: newOpt };
        // console.log(newE);
        return newE;
      }
    });
    return state;
  }

  if (action.type === "ANSWER_IS_TRUE") {
    return state.map((e) => {
      if (e.id !== action.id) return e;
      return { ...e, answerCorrect: true };
    });
  }
  return state;
};

export default dataExam;
