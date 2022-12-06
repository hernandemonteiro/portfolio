import { OwnerInfoRepository } from "../models/ownerInfo";
import { responseController } from "../patterns/controllers/responseController";

export class OwnerInfoController {
  async getOwnerInfo(req, res) {
    const ownerInfos = await OwnerInfoRepository.find({});
    await responseController(ownerInfos, ownerInfos, res);
  }

  async createOwnerInfo(req, res) {
    const { picture, name, email, birthday, title, resume } = req.body;

    if ((await OwnerInfoRepository.count()) === 0) {
      const newOwnerInfo = await OwnerInfoRepository.create({
        picture,
        name,
        email,
        birthday,
        title,
        resume,
      });
      await responseController(newOwnerInfo, { _id: newOwnerInfo._id }, res);
      return;
    }
    res.status(403).json({
      errors: [
        "Informações já existem, caso queira pode altera-las, mas não criar outro registro.",
      ],
    });
  }

  async updateOwnerInfo(req, res) {
    const { _id, picture, name, email, birthday, title, resume } = req.body;
    const updatedOwnerInfo = await OwnerInfoRepository.findByIdAndUpdate(_id, {
      picture,
      name,
      email,
      birthday,
      title,
      resume,
    });
    await responseController(
      updatedOwnerInfo,
      { _id: updatedOwnerInfo._id },
      res
    );
  }
}

export default new OwnerInfoController();
