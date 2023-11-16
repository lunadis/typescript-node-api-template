import { PrismaClient } from "@prisma/client";
import DatabaseConnectionInterface from "../../../../contracts/database/DatabaseConnectionInterface";

export default class Database
  implements DatabaseConnectionInterface<PrismaClient>
{
  connection: PrismaClient;

  constructor() {
    const database = new PrismaClient();
    this.connection = database;
  }
}
