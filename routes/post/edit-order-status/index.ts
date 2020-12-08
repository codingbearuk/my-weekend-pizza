import OrderModel from '../../../models/order.model';
import Route from '../../route.type';

const editOrderStatus: Route = async (req, res) => {
  const orderID: string = req.body.id;
  const status: string = req.body.status;
  try {
    const order = await OrderModel.findOne({ order_id: orderID });
    console.info(order);
    if (!order) throw new Error('could not find the item in database');
    const editedOrder = { ...order };
    editedOrder.status = status;
    const edit = await OrderModel.findOneAndUpdate({ order_id: orderID }, editedOrder);
    if (!edit) throw new Error('could not save changes into database');
    console.info(edit);
    res.status(200).json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ status: 'error', msg: err });
  }
};

export default editOrderStatus;
