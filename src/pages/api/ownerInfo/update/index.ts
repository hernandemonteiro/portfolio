import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { ownerInfoUpdateValidate } from "../../../../middlewares/ownerInfo/updateValidate";
import OwnerInfoController from "../../../../controllers/OwnerInfoController";

export default async function updateOwnerInfo(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: ownerInfoUpdateValidate,
    controller: OwnerInfoController.updateOwnerInfo,
    method: "POST",
  });

}
