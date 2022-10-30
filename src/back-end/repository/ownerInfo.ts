import { OwnerInfoSchema } from "../models/ownerinfo";

var mongoose = require("mongoose");

export const ownerInfoRepository =
  mongoose.models.OwnerInfo || mongoose.model("OwnerInfo", OwnerInfoSchema);
