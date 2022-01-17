import { Router } from "express";
import UserController from "../controllers/user.controller";
import verifyToken from "../middlewares/auth";

const router = Router();

//Create new registration
router.get("/", [verifyToken], UserController.getUser);

export default router;
