import "dotenv";
import express, { Application } from "express";
import Router from "./routes";
import { createConnection } from "typeorm";
import dbConfig from "../database";

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(Router);

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
