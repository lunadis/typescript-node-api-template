import path from "path";
import dotenv from "dotenv";
import Database from "./configurations/database/database.config";
import expressConfig from "./configurations/express.config";

dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});

const database = new Database();
expressConfig(database);
