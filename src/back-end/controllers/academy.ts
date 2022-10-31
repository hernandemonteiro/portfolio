import AcademyService from "../services/academyService";

export class AcademyController {
  async getAll(req, res) {
    try {
      const formations = await AcademyService.getAll();
      res.status(200).json(formations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createAcademy(req, res) {
    try {
      const formation = {
        title: req.title,
        foundation: req.foundation,
        since: req.since,
        status: req.status,
      };
      const newFormation = await AcademyService.createAcademy(formation);
      res.status(200).json(newFormation);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateAcademy(req, res) {
    try {
      const formation = {
        _id: req._id,
        title: req.title,
        foundation: req.foundation,
        since: req.since,
        status: req.status,
      };
      const updatedFormation = await AcademyService.updateAcademy(formation);
      res.status(200).json(updatedFormation);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteAcademy(req, res) {
    try {
      const deletedFormation = await AcademyService.deleteAcademy(req._id);
      res.status(200).json(deletedFormation);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AcademyController();
