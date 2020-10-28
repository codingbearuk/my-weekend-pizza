import Route from '../../route.type';
import { v4 } from 'uuid';
import OrderModel from '../../../models/order.model';

const createCheckoutSession: Route = async (req, res) => {
  const stripe = require('stripe')(process.env.STRIPE_SK);
  const price: number = Math.round(req.body.amount.toFixed(2) * 100);
  const cart: string = req.body.cart;
  const id: string = v4();
  const address: {
    city: string;
    postcode: string;
    address: string;
    phone: string;
  } = req.body.address;

  const document = {
    order_id: id,
    cart: JSON.parse(cart),
    address,
    totalPrice: price,
    paymentSuccess: false,
    status: 'pending_payment',
  };

  const orderToSave = new OrderModel(document);
  await orderToSave.save();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'Pizza',
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3030?payment=success&id=${id}/`,
    cancel_url: `http://localhost:3030?payment=cancel&id=${id}/`,
  });

  if (session)
    res.status(200).json({
      status: 200,
      id,
      session_id: session.id,
    });
  else res.status(500);
};

export default createCheckoutSession;
