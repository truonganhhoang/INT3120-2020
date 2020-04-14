export const nextQuestion = () => ({
  type: "NEXT_QUESTION",
});

export const startExam = () => ({
  type: "START_EXAM",
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
