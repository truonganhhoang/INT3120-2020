import Word from '../models/word';
import Question from '../models/question';
import data from '../input-data/index'

// WORD SERVICES
const createWords = () => {
  data.education.forEach(item => Word.createNew(item));
  data.sports.forEach(item => Word.createNew(item));
}

const getAllWords = () => {
  return new Promise(async (resolve, reject) => {
    const result = await Word.getAll();
    resolve(result);
  })
}

const createNewWord = word => {
  Word.createNew(word);
}

// QUESTION SERVICES
const createQuestions = () =>{
  data.questions.forEach(item => Question.createNew(item));
}
const getAllQuestions = () =>{
  return new Promise(async (resolve, reject)=>{
    const result = await Question.getAll();
    resolve(result);
  })
}
const createNewQuestion = question => {
  Question.createNew(question);
}

const getDataToUpdate = async time => {
  const result = {
    words: await Word.getWordsToUpdate(time),
    questions: await Question.getQuestionsToUpdate(time)
  }
  return new Promise((resolve, reject) => {
    resolve(result);
  });
}

export default { getAllWords, createNewWord, getAllQuestions, createNewQuestion, getDataToUpdate}
