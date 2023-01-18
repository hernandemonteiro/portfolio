import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  resume: { type: String, required: true },
  content: { type: String, required: true },
});

export const ArticleRepository =
  mongoose.models.Article || mongoose.model("Article", articleSchema);