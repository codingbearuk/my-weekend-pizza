import mongoose, { Schema, Document } from 'mongoose';
import { CartItem } from 'redux/actions/cart.action';

export interface OrderSchema extends Document {
  order_id: string;
  cart: Array<CartItem>;
  address: {
    city: string;
    postcode: string;
    address: string;
    phone: string;
    deliveryDate: Date;
  };
  totalPrice: number;
  paymentSuccess: boolean;
  status: string;
}

const orderSchema = new Schema({
  order_id: { type: String, required: true },
  cart: { type: Array, required: true },
  address: { type: Object, required: true },
  totalPrice: { type: Number, required: true },
  paymentSuccess: { type: Boolean, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.model<OrderSchema>('order', orderSchema);
