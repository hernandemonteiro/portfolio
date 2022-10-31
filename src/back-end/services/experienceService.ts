import { iExperience } from "../contracts/iExperience";
import { experienceRepository } from "../repository/experience";

export class ExperienceService implements iExperience {
  async getAll() {
    return await experienceRepository.find({});
  }

  async createExperience(experience) {
    return await experienceRepository.create({
      title: experience.title,
      company: experience.company,
      since: experience.since,
      until: experience.until,
    });
  }

  async updateExperience(experience) {
    return await experienceRepository.findByIdAndUpdate(experience._id, {
      title: experience.title,
      company: experience.company,
      since: experience.since,
      until: experience.until,
    });
  }

  async deleteExperience(_id) {
    return await experienceRepository.findByIdAndDelete(_id);
  }
}

export default new ExperienceService();
