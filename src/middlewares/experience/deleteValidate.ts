import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const experienceDeleteValidate = initMiddleware(
  validateMiddleware(
    [
      body("_id")
        .isString()
        .withMessage("Obrigatório passar _id para deletar."),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);
