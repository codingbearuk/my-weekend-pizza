import Route from '../../route.type';
import OrderModel from '../../../models/order.model';

const finnishOrder: Route = async (req, res) => {
  const status: string = req.body.status;
  const id: string = req.body.id;

  if (status === 'success') {
    const update = await OrderModel.findOneAndUpdate(
      { order_id: id },
      {
        $set: {
          paymentSuccess: true,
          status: 'your order is under realisation',
        },
      }
    );
    if (update) res.status(200).json({ status: 'ok' });
    else res.status(500);
  } else {
    const deleteOrder = await OrderModel.findOneAndDelete({ order_id: id });
    if (deleteOrder) res.status(200).json({ status: 'canceled' });
    else res.status(500);
  }
};

export default finnishOrder;
