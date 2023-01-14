import Database from "../../infra/db";
import { requestFormater } from "./requestFormater";

interface entitiePatternApi {
  validate: (validate, validationExpress) => void;
  controller: (req, res) => void;
  method: string;
}

export async function apiCallPatternFormat(
  req,
  res,
  entitie: entitiePatternApi
) {
  if (!req.body && entitie.method != "GET") {
    res.status(404).json({
      errors: ["body é requisitado e não foi encontrado na requisição."],
    });
    return;
  }

  const formatRequestStringToJson = await requestFormater(req);
  await entitie.validate(formatRequestStringToJson, res);

  await responseAPI(
    {
      method: entitie.method,
      requestedMethod: req.method,
      response: res,
    },
    entitie.controller(formatRequestStringToJson, res)
  );
}

export async function responseAPI(configRequest, callback) {
  Database.dbConnect();

  configRequest.requestedMethod === configRequest.method
    ? await callback
    : configRequest.response
        .status(405)
        .json({ errors: ["Este método não é aceito!"] });
}
