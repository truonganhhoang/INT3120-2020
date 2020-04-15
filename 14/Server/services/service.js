import Word from '../models/word';
import data from '../input-data/index'

const createWord = () => {
  data.education.forEach(item => Word.createNew(item));
  data.sports.forEach(item => Word.createNew(item));
}

const getAllWords = () => {
  return new Promise(async (resolve, reject) => {
    const result = await Word.getAll();
    resolve(result);
  })
}

export default {createWord, getAllWords}
