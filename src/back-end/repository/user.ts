var mongoose = require("mongoose");
import { UserSchema } from "../models/user";

export const userRepository =
  mongoose.models.Users || mongoose.model("Users", UserSchema);
