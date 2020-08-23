import mongoose, { Schema, Document } from "mongoose";

interface UserSchema extends Document {
  email: string;
  password: string;
  adress: string;
  city: string;
  postcode: string;
  phone: number;
}

const userSchema = new Schema({
  email: { type: String, reqired: true },
  password: { type: String, reqired: true },
  adress: { type: String, reqired: true },
  city: { type: String, reqired: true },
  postcode: { type: String, reqired: true },
  phone: { type: Number, reqired: true },
});

export default mongoose.model<UserSchema>("user", userSchema);
