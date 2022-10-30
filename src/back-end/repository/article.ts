import { articleSchema } from "../models/article";

var mongoose = require("mongoose");

export const articleRepository =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
