import OrderModel from '../models/order.model';

const orders = async emit => {
  const orders = await OrderModel.find();
  const stringOrders: string = JSON.stringify(orders);
  emit('new-order', stringOrders);
};

export default orders;
