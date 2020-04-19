import { createExamData } from "../utils/ExamDataService";

export const refresh = () => ({
  type: "REFRESH_EXAM",
});

export const startExam = (numberQuestions, second) => ({
  type: "START_EXAM",
  totalQuestions: numberQuestions,
  time: second,
});

export const answerIsTrue = () => ({
  type: "ANSWER_IS_TRUE",
});

export const answerIsFalse = () => ({
  type: "ANSWER_IS_FALSE",
});

export const pickOneChoice = (indexChoice, id) => ({
  type: "PICK_ONE_CHOICE",
  indexChoice,
  id,
});

export const tick = () => ({
  type: "TICK",
});

export const createExam = (data) => ({
  type: "CREATE_EXAM",
  dataQuestions: data,
});

export const loadingExam = (bool) => ({
  type: "IS_LOADING_EXAM",
  loading: bool,
});
export function fetchData(categoryName, topicName) {
  return (dispatch) => {
    dispatch(loadingExam(true));
    return createExamData(topicName, categoryName).then((newExam) => {
      dispatch(createExam(newExam));
      dispatch(loadingExam(false));
    });
  };
}
