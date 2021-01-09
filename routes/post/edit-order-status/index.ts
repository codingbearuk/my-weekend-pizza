import OrderModel from '../../../models/order.model';
import Route from '../../route.type';

const editOrderStatus: Route = async (req, res) => {
  const orderID: string = req.body.id;
  const status: string = req.body.status;
  try {
    const edit = await OrderModel.findOneAndUpdate(
      { order_id: orderID },
      {
        $set: { status },
      }
    );
    if (!edit) throw new Error('could not save changes into database');
    console.info(edit);
    res.status(200).json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ status: 'error', msg: err });
  }
};

export default editOrderStatus;
