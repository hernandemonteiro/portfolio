import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const skillsUpdateValidate = initMiddleware(
  validateMiddleware(
    [
      body("_id")
        .isString()
        .withMessage("Obrigatório informar _id para modificar skill."),
      body("type")
        .isString()
        .withMessage("Obrigatório informar tipo de skill.")
        .custom(async (value) => {
          const skillFormat = value === "Hard-Skill" || value === "Soft-Skill";
          if (!skillFormat) {
            throw new Error("Tipo de skill deve ser Hard-Skill ou Soft-Skill");
          }
        }),
      body("skill")
        .isString()
        .withMessage("Obrigatório informar descrição da skill."),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);
