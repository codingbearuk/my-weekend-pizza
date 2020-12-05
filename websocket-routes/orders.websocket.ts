import OrderModel from '../models/order.model';

interface Callback {
  (data: string): void;
}

const orders = async (callback: Callback) => {
  const orders = await OrderModel.find();
  const stringOrders: string = JSON.stringify(orders);
  callback(stringOrders);
};

export default orders;
