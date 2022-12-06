import mongoose from "mongoose";

const academySchema = new mongoose.Schema({
  title: { type: String, required: true },
  foundation: { type: String, required: true },
  since: { type: String, required: true },
  status: { type: String, required: true },
});

export const AcademyRepository =
  mongoose.models.Academy || mongoose.model("Academy", academySchema);
