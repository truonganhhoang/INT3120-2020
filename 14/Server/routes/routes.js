import express from 'express';
import path from 'path';
import passport from 'passport';
import controller from '../controllers/controller';
import { initLocalPassport } from '../config/localPassport';

initLocalPassport();
const router = express.Router();

const initRoutes = app => {

  // admin
  router.get('/', controller.checkLoggedIn, (req, res) => {
    const dir = path.resolve(__dirname, '..');
    res.sendFile(path.join(dir, 'public/html/index.html'));
  });

  router.get('/login', controller.checkLoggedOut, (req, res) => {
    const dir = path.resolve(__dirname, '..');
    res.sendFile(path.join(dir, 'public/html/login.html'));
  });

  router.post('/login', controller.checkLoggedOut, passport.authenticate("local", {successRedirect: "/", failureRedirect: "/login"}));

  router.get('/logout', controller.checkLoggedIn, controller.logout);

  router.post('/insertNewWord', controller.checkLoggedIn, controller.createNewWord);

  router.post('/insertNewQuestion', controller.checkLoggedIn, controller.createNewQuestion);

  // user

  router.get('/getAllWords', controller.getAllWords);

  router.get('/getAllQuestions',controller.getAllQuestions);

  router.post('/updateData', controller.updateData);

  return app.use('/', router);
};

export default initRoutes;
