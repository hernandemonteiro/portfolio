import mongoose from "mongoose";

export const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  since: { type: String, required: true },
  until: { type: String, required: true },
});
