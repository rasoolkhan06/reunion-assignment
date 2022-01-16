import express from "express";
import authenticate from "./authenticate";
import user from "./user";

const routes = express.Router();

routes.use("/authenticate", authenticate);
routes.use("/user", user);

export default routes;
