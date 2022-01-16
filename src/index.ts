import "dotenv";
import express, { Application } from "express";
import routes from "./routes";
import { createConnection } from "typeorm";
import dbConfig from "../database";
import * as cookieParser from "cookie-parser"

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());

app.use("/", routes);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
