import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import UserController from "../controllers/user.controller";

const router = Router();

//Create new registration
router.post("/", AuthController.authenticate);

export default router;
