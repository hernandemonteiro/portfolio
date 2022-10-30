var mongoose = require("mongoose");
import { PortfolioPostSchema } from "../models/portfolioPost";

export const portfolioPostRepository =
  mongoose.models.PortfolioPost ||
  mongoose.model("PortfolioPost", PortfolioPostSchema);
