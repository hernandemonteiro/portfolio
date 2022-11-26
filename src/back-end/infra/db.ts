import mongoose from "mongoose";
import dotEnv from "dotenv";
dotEnv.config();

export class Database {
  dbConnect() {
    mongoose.connect(process.env.MONGO_DB || "");
  }
}

export default new Database();
