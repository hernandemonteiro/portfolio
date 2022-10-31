import { academySchema } from "../models/academy";

var mongoose = require("mongoose");

export const academyRepository =
  mongoose.models.Academy || mongoose.model("Academy", academySchema);
