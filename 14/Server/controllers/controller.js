import service from '../services/service'

const insert = (req, res) => {
  service.createWord();
}
const insertQuestion = (req, res) => {
  service.createQuestion();
} 

const getAllWords = async (req, res) => {
  const words = await service.getAllWords();
  res.json({words: words});
}

const getAllQuestions = async( req, res) =>{
  const questions = await service.getAllQuestions();
  res.json({questions: questions});
}

export default { insert, insertQuestion, getAllWords, getAllQuestions }
