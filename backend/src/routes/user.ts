import express, { Router } from "express";
import { userLogin } from "../crud/userCrud";
import { userRegister } from "../crud/userCrud";

const router: Router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
export default router;