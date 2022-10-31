import SkillService from "../services/skillsService";

export class SkillController {
  async getAll(req, res) {
    try {
      const skills = await SkillService.getAll();
      res.status(200).json(skills);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createSkill(req, res) {
    try {
      const newSkill = {
        type: req.type,
        skill: req.skill,
      };
      const skill = await SkillService.createSkill(newSkill);
      res.status(200).json(skill);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateSkill(req, res) {
    try {
      const updateSkill = {
        _id: req._id,
        type: req.type,
        skill: req.skill,
      };
      const skillUpdated = await SkillService.updateSkill(updateSkill);
      res.status(200).json(skillUpdated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteSkill(req, res) {
    try {
      const deletedSkill = await SkillService.deleteSkill(req._id);
      res.status(200).json(deletedSkill);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new SkillController();
