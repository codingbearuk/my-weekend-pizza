import OrderModel from '../../../models/order.model';
import OrderArchiveModel from '../../../models/order-archive.model';
import Route from '../../route.type';

const archiveOrder: Route = async (req, res) => {
  const id: string = req.body.id;
  try {
    const removedOrder = await OrderModel.findOneAndDelete({ order_id: id });
    const document = {
      order_id: removedOrder.order_id,
      cart: removedOrder.cart,
      address: {
        city: removedOrder.address.city,
        postcode: removedOrder.address.postcode,
        address: removedOrder.address.address,
        phone: removedOrder.address.phone,
        deliveryDate: removedOrder.address.deliveryDate,
      },
      totalPrice: removedOrder.totalPrice,
      paymentSuccess: removedOrder.paymentSuccess,
      status: removedOrder.status,
    };
    const orderToArchive = new OrderArchiveModel(document);
    const archive = await orderToArchive.save();
    console.log(archive, orderToArchive);
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
