import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const academyCreateValidate = initMiddleware(
  validateMiddleware(
    [
      body("title")
        .isString()
        .withMessage("Nome do curso é requerido para cadastrar experiência."),
      body("foundation")
        .isString()
        .withMessage("Obrigatório informar instituição de ensino."),
      body("since").isString().withMessage("Data de inicio é obrigatória."),
      body("status")
        .isString()
        .withMessage("Informação de permanência é obrigatória!"),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);
