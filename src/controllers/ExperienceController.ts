import { ExperienceRepository } from "../models/experience";
import { responseController } from "../patterns/controllers/responseController";
import { Result } from "../infra/Result";

export class ExperienceController {
  async getExperiences(req, res) {
    const experiences = await ExperienceRepository.find({});
    await responseController(experiences, experiences, res);
  }

  async createExperience(req, res) {
    const { title, company, since, until } = req.body;

    const newExperience = await ExperienceRepository.create({
      title,
      company,
      since,
      until,
    });

    await responseController(
      newExperience,
      {
        _id: newExperience._id,
      },
      res
    );
  }

  async updateExperience(req, res) {
    const { _id, title, company, since, until } = req.body;

    const updatedExperience = await ExperienceRepository.findByIdAndUpdate(
      _id,
      {
        title,
        company,
        since,
        until,
      }
    );

    await responseController(
      updatedExperience,
      {
        _id: updatedExperience._id,
      },
      res
    );
  }

  async deleteExperience(req, res) {
    const deletedExperience = await ExperienceRepository.findByIdAndDelete(
      await req.body._id
    );

    await responseController(
      deletedExperience,
      { _id: deletedExperience._id },
      res
    );
  }
}

export default new ExperienceController();
