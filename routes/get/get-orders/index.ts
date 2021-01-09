import Route from '../../route.type';
import OrderModel from '../../../models/order.model';

const getOrders: Route = async (req, res) => {
  const orders = await OrderModel.find();
  orders ? res.status(200).json(orders) : res.status(404);
};

export default getOrders;
