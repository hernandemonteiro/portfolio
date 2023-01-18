import OwnerInfoController from "../../../../controllers/OwnerInfoController";
import { ownerInfoCreateValidate } from "../../../../middlewares/ownerInfo/createValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function createOwnerInfo(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: ownerInfoCreateValidate,
    controller: OwnerInfoController.createOwnerInfo,
    method: "POST",
  });
}
