import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import initRoutes from '../Server/routes/routes';
import connectDB from '../Server/config/connectDB';
import host from '../Config/host';

connectDB();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
initRoutes(app);

http.createServer(app).listen(host.port, host.hostname, ()=>{
  console.log(`Listenning on ${host.hostname} on port ${host.port}...`)
})