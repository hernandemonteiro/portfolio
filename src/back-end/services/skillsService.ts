import { iSkills } from "../contracts/iSkills";
import { skillsRepository } from "../repository/skills";

export class SkillService implements iSkills {
  async getAll() {
    return await skillsRepository.find({});
  }

  async createSkill(skill) {
    return await skillsRepository.create({
      type: skill.type,
      skill: skill.skill,
    });
  }

  async updateSkill(skill) {
    return await skillsRepository.findByIdAndUpdate(skill._id, {
      type: skill.type,
      skill: skill.skill,
    });
  }

  async deleteSkill(_id) {
    return await skillsRepository.findByIdAndDelete(_id);
  }
}

export default new SkillService();
