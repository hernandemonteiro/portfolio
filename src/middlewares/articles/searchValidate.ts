import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";

export const articleSearchValidate = initMiddleware(
  validateMiddleware(
    [
      body("search")
        .isString()
        .withMessage(
          "Obrigatório fornecer parametro search no body para encontrar artigos."
        ),
    ],
    validationResult
  )
);
