import { experienceSchema } from "../models/experience";

var mongoose = require("mongoose");

export const experienceRepository =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
