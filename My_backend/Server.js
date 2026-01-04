import {createServer}  from 'node:http';
import { Server } from "socket.io";
import express from 'express';
import { Socket } from 'node:dgram';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors:{
    origin: '*'
  }
});

let room = "Group"

io.on('connection',(socket)=>{
  console.log("a user connected", socket.id )

  socket.on("joinRoom",async (userName)=>{
    console.log(`${userName} is join group`)

    await socket.join(room);

    //boardcast
    socket.to(room).emit('joinInfo', userName);
  })

  // messaging propose
   socket.on("chatMessage", (msg)=>{
    socket.to(room).emit('chatMessage', msg)
   }) 

   // typer
   socket.on("typing", (userName)=>{
    socket.to(room).emit('typing', userName);
   })

   socket.on("stoptyping", (userName)=>{
    socket.to(room).emit('stoptyping', userName);
   })
})

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});