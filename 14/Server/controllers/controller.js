import service from '../services/service'

const insertwords = (req, res) => {
  service.createWords();
}
const insertQuestions = (req, res) => {
  service.createQuestions();
} 

const getAllWords = async (req, res) => {
  const words = await service.getAllWords();
  res.json({words: words});
}

const getAllQuestions = async( req, res) =>{
  const questions = await service.getAllQuestions();
  res.json({questions: questions});
}

const createNewWord = (req, res) => {
  const word = {
    picture: req.body.picture,
    eng: req.body.eng,
    vie: req.body.vie,
    category: req.body.category,
    pronounce: req.body.pronounce,
    type: req.body.type,
    example: req.body.example
  }
  service.createNewWord(word);
  res.redirect('/');
}

const createNewQuestion = (req, res) => {
  const question = {
    question: req.body.question,
    category: req.body.category,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    result: req.body.result
  }
  service.createNewQuestion(question);
  res.redirect('/');
}

export default { insertwords, insertQuestions, getAllWords, getAllQuestions, createNewWord, createNewQuestion }
