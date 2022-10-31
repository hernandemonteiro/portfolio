import mongoose from "mongoose";

export const skillsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  skill: { type: String, required: true },
});
