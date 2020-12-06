import { Socket } from 'socket.io';

const connection = (socket: Socket) => {
  console.info('websocket connection ok');
  socket.emit('connection-status', 'connected');
};

export default connection;
