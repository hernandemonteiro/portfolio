import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const experienceUpdateValidate = initMiddleware(
  validateMiddleware(
    [
      body("_id")
        .isString()
        .withMessage("Obrigatório passar _id para modificar experiência."),
      body("title").isString().withMessage("Obrigatório informar profissão."),
      body("company").isString().withMessage("Obrigatório informar empresa."),
      body("since")
        .isString()
        .withMessage("Obrigatório informar data de inicio."),
      body("until")
        .isString()
        .withMessage("Informação de permanência é obrigatória!"),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);
