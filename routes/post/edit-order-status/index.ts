import OrderModel from '../../../models/order.model';
import UserModel from '../../../models/user.model';
import Route from '../../route.type';
import sendEmail from '../../../utils/send-email';
import template from './email-template';

const editOrderStatus: Route = async (req, res) => {
  const orderID: string = req.body.id;
  const status: string = req.body.status;
  try {
    console.log(orderID);
    const edit = await OrderModel.findOneAndUpdate(
      { order_id: orderID },
      {
        $set: { status },
      }
    );
    if (!edit) throw new Error('could not save changes into database');
    const order = await OrderModel.findOne({ order_id: orderID });
    const user = await UserModel.findOne({ adress: order.address.address });
    console.log(user);
    sendEmail(user.email, 'Your pizza order status has been changed', template, status);
    res.status(200).json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ status: 'error', msg: err });
  }
};

export default editOrderStatus;
