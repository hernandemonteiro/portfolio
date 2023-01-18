import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  skill: { type: String, required: true },
});

export const SkillsRepository =
  mongoose.models.Skills || mongoose.model("Skills", skillsSchema);
