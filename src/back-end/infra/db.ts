import mongoose from "mongoose";

export class Database {
  dbConnect() {
    mongoose.connect(process.env.MONGO_DB);
  }
}

export default new Database();
