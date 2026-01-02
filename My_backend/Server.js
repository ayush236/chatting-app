import {createServer}  from 'node:http';
import { Server } from "socket.io";
import express from 'express';

const app = express();
const server = createServer(app);

const io = new Server(server);


io.on('connection',(socket)=>{
  console.log("a user connected", socket.id )
})

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});