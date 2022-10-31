import ExperienceService from "../services/experienceService";

export class ExperienceController {
  async getAll(req, res) {
    try {
      const experiences = await ExperienceService.getAll();
      res.status(200).json(experiences);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createExperience(req, res) {
    try {
      const experience = {
        title: req.title,
        company: req.company,
        since: req.since,
        until: req.until,
      };
      const newExperience = await ExperienceService.createExperience(
        experience
      );
      res.status(200).json(newExperience);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateExperience(req, res) {
    try {
      const experience = {
        _id: req._id,
        title: req.title,
        company: req.company,
        since: req.since,
        until: req.until,
      };
      const updatedExperience = await ExperienceService.updateExperience(
        experience
      );
      res.status(200).json(updatedExperience);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteExperience(req, res) {
    try {
      const deletedExperience = await ExperienceService.deleteExperience(
        req._id
      );
      res.status(200).json(deletedExperience);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ExperienceController();
