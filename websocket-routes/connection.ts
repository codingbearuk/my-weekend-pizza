import { Socket } from 'socket.io';
import websocketRoutes from './index';

const connection = (socket: Socket) => {
  console.info('websocket connection ok');
  socket.emit('connection-status', 'connected');
  socket.on('get-orders', () => websocketRoutes.orders(socket));
  socket.on('new-order', () => websocketRoutes.orders(socket));
};

export default connection;
