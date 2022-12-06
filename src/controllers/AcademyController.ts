import { AcademyRepository } from "../models/academy";
import { responseController } from "../patterns/controllers/responseController";

export class AcademyController {
  async getAcademyExperiences(req, res) {
    const academyExperiences = await AcademyRepository.find({});
    await responseController(academyExperiences, academyExperiences, res);
  }

  async createAcademy(req, res) {
    const { title, foundation, since, status } = req.body;
    const newAcademy = await AcademyRepository.create({
      title,
      foundation,
      since,
      status,
    });

    await responseController(newAcademy, { _id: newAcademy._id }, res);
  }

  async updateAcademy(req, res) {
    const { _id, title, foundation, since, status } = req.body;
    const updatedAcademy = await AcademyRepository.findByIdAndUpdate(_id, {
      title,
      foundation,
      since,
      status,
    });

    await responseController(updatedAcademy, { _id: updatedAcademy._id }, res);
  }

  async deleteAcademy(req, res) {
    const deletedAcademy = await AcademyRepository.findByIdAndDelete(
      await req.body._id
    );

    await responseController(deletedAcademy, { _id: deletedAcademy._id }, res);
  }
}

export default new AcademyController();
