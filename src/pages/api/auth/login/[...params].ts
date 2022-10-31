import AuthController from "../../../../back-end/controllers/auth";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function login(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const login = {
    email: query[0],
    password: query[1],
  };
  console.log(login)
  req.method === "GET" && query.length === 2
    ? await AuthController.login(login, res)
    : res.status(500).end("Need all correct informations!");
}
