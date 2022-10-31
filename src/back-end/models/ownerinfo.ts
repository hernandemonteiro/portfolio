import mongoose from "mongoose";

export const OwnerInfoSchema = new mongoose.Schema({
  picture: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: String, required: true },
  title: { type: String, required: true },
  resume: { type: String, required: true },
});
