import service from '../services/service'

const insert = (req, res) => {
  service.createWord();
}

const getAllWords = async (req, res) => {
  const words = await service.getAllWords();
  res.json({words: words});
}

export default { insert, getAllWords }
