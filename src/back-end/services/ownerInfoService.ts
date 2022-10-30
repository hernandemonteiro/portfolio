import { iOwnerInfo } from "../contracts/iOwnerInfo";
import { ownerInfoRepository } from "../repository/ownerInfo";

export class OwnerInfoService implements iOwnerInfo {
  async getOwnerInfo() {
    return await ownerInfoRepository.find({});
  }
  async createOwnerInfo(infos) {
    return await ownerInfoRepository.create({
      picture: infos.picture,
      name: infos.name,
      email: infos.email,
      birthday: infos.birthday,
      title: infos.title,
      resume: infos.resume,
    });
  }
  async updateOwnerInfo(infos) {
    return await ownerInfoRepository.findByIdAndUpdate(infos._id, {
      picture: infos.picture,
      name: infos.name,
      email: infos.email,
      birthday: infos.birthday,
      title: infos.title,
      resume: infos.resume,
    });
  }
  async deleteOwnerInfo(_id) {
    return await ownerInfoRepository.findByIdAndDelete(_id);
  }
}

export default new OwnerInfoService();
