import express, { Router } from "express";
import { userLogin } from "../crud/userCrud";

const router: Router = express.Router();

router.post("/login", userLogin);

export default router;