var path = require("path");
require("dotenv").config();
import { ConnectionOptions } from "typeorm";

const isCompiled = path.extname(__filename).includes("js");

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "ec2-34-230-198-12.compute-1.amazonaws.com",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "cxmhdqnyrduciw",
  password: process.env.POSTGRES_PASSWORD || "317e72a3279328229d13b01c8c0abb9eeb5f78df0cc912c030a2d60a69fc6877",
  database: process.env.POSTGRES_DB || "d7d228vgp1fk5b",
  ssl: {
    rejectUnauthorized: false
  },
  entities: [__dirname + `/src/entity/**/*.${isCompiled ? "js" : "ts"}`],
  migrations: [__dirname + `/src/migration/**/*.${isCompiled ? "js" : "ts"}`],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
  synchronize: true,
};

export default config;
