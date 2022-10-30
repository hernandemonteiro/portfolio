import OwnerInfoService from "../services/ownerInfoService";

export class OwnerInfoController {
  async getOwnerInfo(req, res) {
    try {
      const infos = await OwnerInfoService.getOwnerInfo();
      res.status(200).json(infos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createOwnerInfo(req, res) {
    try {
      const newOwnerInfos = {
        picture: req.picture,
        name: req.name,
        email: req.email,
        birthday: req.birthday,
        title: req.title,
        resume: req.resume,
      };
      const ownerInfo = await OwnerInfoService.createOwnerInfo(newOwnerInfos);
      res.status(200).json(ownerInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateOwnerInfo(req, res) {
    try {
      const ownerInfos = {
        _id: req._id,
        picture: req.picture,
        name: req.name,
        email: req.email,
        birthday: req.birthday,
        title: req.title,
        resume: req.resume,
      };
      const ownerInfo = await OwnerInfoService.updateOwnerInfo(ownerInfos);
      res.status(200).json(ownerInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteOwnerInfo(req, res) {
    try {
      const deletedInfos = await OwnerInfoService.deleteOwnerInfo(req._id);
      res.status(200).json(deletedInfos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new OwnerInfoController();
