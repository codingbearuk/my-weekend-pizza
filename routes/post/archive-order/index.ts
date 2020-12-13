import OrderModel from '../../../models/order.model';
import OrderArchiveModel from '../../../models/order-archive.model';
import Route from '../../route.type';
import orderArchiveModel from '../../../models/order-archive.model';

const archiveOrder: Route = async (req, res) => {
  const id: string = req.body.id;
  try {
    const removedOrder = await OrderModel.findOneAndDelete({ order_id: id });
    if (!removedOrder) throw new Error('could not delete this item');
    const orderToArchive = new OrderArchiveModel(removedOrder);
    const archive = await orderToArchive.save();
    if (!archive) throw new Error('could not archive this item');
    res.status(200).json({
      status: 'ok',
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      msg: err,
    });
  }
};

export default archiveOrder;
