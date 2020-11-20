import mongoose, { Schema, Document } from 'mongoose';

export interface MessageSchema extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  new: boolean;
}

const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  new: { type: Boolean, required: true },
});

export default mongoose.model<MessageSchema>('message', messageSchema);
