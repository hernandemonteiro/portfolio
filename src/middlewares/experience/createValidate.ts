import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const experienceCreateValidate = initMiddleware(
  validateMiddleware(
    [
      body("title")
        .isString()
        .withMessage("Profissão é requerida para cadastrar experiência."),
      body("company").isString().withMessage("Obrigatório informar empresa."),
      body("since").isString().withMessage("Data de inicio é obrigatória."),
      body("until")
        .isString()
        .withMessage("Informação de permanência é obrigatória!"),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);
