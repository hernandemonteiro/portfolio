import UserController from "../../../../back-end/controllers/user";
import Database from "../../../../back-end/infra/db";
import Crypto from "../../../../helpers/crypto";

export default async function get(req, res) {
  Database.dbConnect();

  const query = req.query.params;
  const user = {
    name: query[0],
    email: query[1],
    password: query[2],
    phone: query[3],
  };
  return await UserController.createUser(user, res);
}
