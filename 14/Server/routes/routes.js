import express from 'express';
import path from 'path';
import controller from '../controllers/controller'

const router = express.Router();

const initRoutes = app => {
  router.get('/', (req, res) => {
    const dir = path.resolve(__dirname, '..');
    res.sendFile(path.join(dir, 'public/html/index.html'));
  });

  router.post('/insert', controller.insert);

  router.post('/insertQuestion', controller.insertQuestion);

  router.get('/getAllWords', controller.getAllWords)

  router.get('/getAllQuestions', controller.getAllQuestions)

  return app.use('/', router);
};

export default initRoutes;
