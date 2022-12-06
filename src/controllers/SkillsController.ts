import { SkillsRepository } from "../models/skills";
import { responseController } from "../patterns/controllers/responseController";

export class SkillsController {
  async getSkills(req, res) {
    const skills = await SkillsRepository.find({});
    await responseController(skills, skills, res);
  }

  async createSkill(req, res) {
    const { type, skill } = req.body;
    const newSkill = await SkillsRepository.create({
      type,
      skill,
    });

    await responseController(newSkill, { _id: newSkill._id }, res);
  }

  async updateSkill(req, res) {
    const { _id, type, skill } = req.body;
    const updatedSkill = await SkillsRepository.findByIdAndUpdate(_id, {
      type,
      skill,
    });
    await responseController(updatedSkill, { _id: updatedSkill._id }, res);
  }

  async deleteSkill(req, res) {
    const deletedSkill = await SkillsRepository.findByIdAndDelete(
      await req.body._id
    );
    await responseController(deletedSkill, { _id: deletedSkill._id }, res);
  }
}

export default new SkillsController();
