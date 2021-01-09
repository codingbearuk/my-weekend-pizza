import Route from '../../route.type';
import OrderModel from '../../../models/order.model';

const finnishOrder: Route = async (req, res) => {
  const orderID: string = req.params.id;
  await OrderModel.findOneAndUpdate(
    { order_id: orderID },
    {
      $set: {
        paymentSuccess: true,
        status: 'your order is under realisation',
      },
    }
  );
  res.redirect(`${process.env.HOST}?payment=success&id=${orderID}/`);
};

export default finnishOrder;
