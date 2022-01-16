import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();

//Create new registration
router.post("/authenticate", UserController.getMessage);

export default router;
