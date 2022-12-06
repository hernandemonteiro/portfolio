import OwnerInfoController from "../../../../back-end/controllers/ownerInfo";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { ownerInfoUpdateValidate } from "../../../../middlewares/ownerInfo/updateValidate";

export default async function updateOwnerInfo(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: ownerInfoUpdateValidate,
    controller: OwnerInfoController.updateOwnerInfo,
    method: "POST",
  });
}
