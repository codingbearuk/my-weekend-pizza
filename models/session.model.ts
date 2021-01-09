import mongoose, { Schema, Document } from "mongoose";

interface SessionSchema extends Document {
  sessionID: string;
  userID: string;
  email: string;
}

const sessionSchema = new Schema({
  sessionID: { type: String, reqired: true },
  userID: { type: String, reqired: true },
  email: { type: String, reqired: true },
});

export default mongoose.model<SessionSchema>("session", sessionSchema);
