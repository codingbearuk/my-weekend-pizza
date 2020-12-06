import OrderModel from '../models/order.model';
import { Socket } from 'socket.io';

const orders = async (socket: Socket) => {
  console.info('recived orders-list query', socket);
  const orders = await OrderModel.find();
  const stringOrders: string = JSON.stringify(orders);
  socket.emit('order-list', stringOrders);
};

export default orders;
