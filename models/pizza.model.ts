import mongoose, { Schema, Document } from "mongoose";

interface PizzaSchema extends Document {
  name: string;
  ingredients: Array<string>;
  price: number;
  image: string;
}

const pizzaSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: Array, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model<PizzaSchema>("pizza", pizzaSchema);
