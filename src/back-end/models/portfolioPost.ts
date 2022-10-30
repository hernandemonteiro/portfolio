import mongoose from "mongoose";

export const PortfolioPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  resume: { type: String, required: true },
  content: { type: String, required: true },
});
