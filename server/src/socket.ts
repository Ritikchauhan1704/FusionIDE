import { io } from ".";

io.on("connection",(socket)=>{
    console.log("Connected",socket.id);
})