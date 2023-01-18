import mongoose from "mongoose";

const PortfolioPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  resume: { type: String, required: true },
  content: { type: String, required: true },
});

export const PortfolioPostRepository =
  mongoose.models.PortfolioPost ||
  mongoose.model("PortfolioPost", PortfolioPostSchema);
