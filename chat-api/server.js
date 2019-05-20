import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; 
import morgan from 'morgan';
import Api from"./api";
import SocketUtil from "./socket/socket"
const port = 3030;  
const app = express(); 
var server = require('http').Server(app);
SocketUtil.io= require('socket.io')(server);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'pug');
app.use("/api",Api)
//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

server.listen(port, () => {
    console.log('server started - ', port);
});
// var nodemon = require('nodemon');

// // process

// //   // Handle normal exits
// //   .on('exit', (code) => {
// //     nodemon.emit('quit');
// //     process.exit(code);
// //   })

// //   // Handle CTRL+C
// //   .on('SIGINT', () => {
// //     nodemon.emit('quit');
// //     process.exit(0);
// //   });