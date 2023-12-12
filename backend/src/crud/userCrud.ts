import { Request, Response } from "express";
import UserModel from "../schemas/user";

export async function userLogin(req: Request, res: Response) {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                info: "User not found",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}