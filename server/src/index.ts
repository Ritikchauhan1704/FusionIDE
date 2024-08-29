import dotenv from 'dotenv';
import http from 'http';
import {Server as SocketServer} from 'socket.io';
import {app} from './app';
import connectDB from './db';

dotenv.config();

const server = http.createServer(app);

export const io = new SocketServer(server);

const port = process.env.PORT || 3000;
connectDB()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is running at port:${port}`);
    });
  })
  .catch((err) => {
    console.log('MONGO db connection failed !!!', err);
  });

