import UserController from "../../../../back-end/controllers/user";
import Database from "../../../../back-end/infra/db";

export default async function get(req, res) {
  Database.dbConnect();
  return await UserController.getAll(req, res);
}
