import { Request, Response } from "express";
import UserModel from "../schemas/user";
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

export async function userLogin(req: Request, res: Response) {

    const user = await UserModel.findOne({
        email: req.body.email
    })
    if (!user) {
        console.log('user not found')
        return res.status(401).json({
            info: "User not found"
        })
    } else {
        console.log('User was found')
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    if (isPasswordValid) {
        console.log('password is correct')
        const token = jwt.sign({
            name: user.username,
            email: user.email,
        }, 'secret123'
        )
        console.log('user logged in')
        return res.status(200).json({
            info: "User logged in",
            status: "OK",
            user: user,
            token: token,
        })
    } else {
        console.log('wrong password')
        return res.status(401).json({
            info: "Wrong password",
        });
    }
}

export async function userRegister(req: Request, res: Response) {

    const user = await UserModel.findOne({
        email: req.body.email
    })
    if (user) {
        console.log('Already registered on this email address')
        return {status: 'error', error: 'Already registered on this email address'}
    }

    console.log(req.body);
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        await UserModel.create({
            username: req.body.username,
            email: req.body.email,
            password: newPassword,
        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
}