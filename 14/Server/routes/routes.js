import express from 'express';
import path from 'path';
import controller from '../controllers/controller'

const router = express.Router();

const initRoutes = app => {
  router.get('/', (req, res) => {
    const dir = path.resolve(__dirname, '..');
    res.sendFile(path.join(dir, 'public/html/index.html'));
  });

  router.post('/insertword', controller.insertwords);

  router.post('/insertQuestion', controller.insertQuestions);

  router.get('/getAllWords', controller.getAllWords);

  router.get('/getAllQuestions', controller.getAllQuestions);

  router.post('/insertNewWord', controller.createNewWord);

  router.post('/insertNewQuestion', controller.createNewQuestion);

  router.post('/updateData', controller.updateData);

  return app.use('/', router);
};

export default initRoutes;
