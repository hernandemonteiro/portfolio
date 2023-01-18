import mongoose from "mongoose";
import dotEnv from "dotenv";
dotEnv.config();

export class Database {
  private MONGO_DB = process.env.MONGO_DB;

  constructor() {
    this.MONGO_DB;
  }

  dbConnect() {
    mongoose.connect(this.MONGO_DB || "");
  }
}

export default new Database();
