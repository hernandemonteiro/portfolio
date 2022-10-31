var mongoose = require("mongoose");
import { skillsSchema } from "../models/skills";

export const skillsRepository =
  mongoose.models.Skills || mongoose.model("Skills", skillsSchema);
