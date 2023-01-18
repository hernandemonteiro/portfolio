import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const ownerInfoUpdateValidate = initMiddleware(
  validateMiddleware(
    [
      body("_id")
        .isString()
        .withMessage("É obrigatório informar _id para alterar."),
      body("picture")
        .isString()
        .withMessage("É obrigatório informar uma URL de picture."),
      body("name").isString().withMessage("Obrigatório informar nome."),
      body("email")
        .isString()
        .withMessage("Obrigatório informar email.")
        .isEmail()
        .withMessage("Digite um endereço de email válido."),
      body("birthday")
        .isString()
        .withMessage("Obrigatório data de nascimento."),
      body("title").isString().withMessage("Obrigatório informar profissão."),
      body("resume").isString().withMessage("Resumo/bios obrigatório."),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);
