import mongoose, { Schema, Document } from "mongoose";

interface SauceSchema extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
}

const sauceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model<SauceSchema>("sauce", sauceSchema);
