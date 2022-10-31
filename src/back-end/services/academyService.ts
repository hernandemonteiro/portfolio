import { iAcademy } from "../contracts/iAcademy";
import { academyRepository } from "../repository/academy";

export class AcademyService implements iAcademy {
  async getAll() {
    return await academyRepository.find({});
  }

  async createAcademy(academy) {
    return await academyRepository.create({
      title: academy.title,
      foundation: academy.foundation,
      since: academy.since,
      status: academy.status,
    });
  }

  async updateAcademy(academy) {
    return await academyRepository.findByIdAndUpdate(academy._id, {
      title: academy.title,
      foundation: academy.foundation,
      since: academy.since,
      status: academy.status,
    });
  }

  async deleteAcademy(_id) {
    return await academyRepository.findByIdAndDelete(_id);
  }
}

export default new AcademyService();
