import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import initRoutes from '../Server/routes/routes';
import connectDB from '../Server/config/connectDB';

connectDB();
const ipv4 = '192.168.0.104'; // local ipv4
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
initRoutes(app);

http.createServer(app).listen(3299, ipv4, ()=>{
  console.log(`Listenning on ${ipv4} on port 3299...`)
})